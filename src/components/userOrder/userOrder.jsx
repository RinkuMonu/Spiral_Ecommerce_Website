import { useEffect, useState } from "react";
import {
  FaBox,
  FaRupeeSign,
  FaCalendarAlt,
  FaTruck,
  FaCreditCard,
  FaSpinner,
} from "react-icons/fa";
import {Link} from "react-router-dom"
export const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const baseUrliMAGE = import.meta.env.VITE_API_BASE_URL_IMAGE;
console.log(orders.products,"product")
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${baseUrl}/order/orders`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // if (!response.ok) {
        //   throw new Error("Failed to fetch orders");
        // }

        const data = await response.json();
        setOrders(data?.orders || []);
        // console.log(data.orders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [baseUrl]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (orders?.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaBox className="mx-auto text-5xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            No orders found
          </h2>
          <p className="text-gray-500 mt-2">
            You haven't placed any orders yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

        <div className="space-y-6">
          {orders?.map((order) => (
            <div
              key={order?._id}
              className="bg-white shadow overflow-hidden rounded-lg"
            >
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium text-gray-900">{order?._id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-400 mr-2" />
                      <span className="font-medium text-gray-900">
                        {formatDate(order?.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order?.status
                    )}`}
                  >
                    {order?.status.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Products
                </h3>
                <div className="space-y-4">
                  {order?.products?.map((product, index) => (
                    <Link
                    to={`/product/${product?.product?._id}`}
                      key={index}
                      className="flex border-b border-gray-100 pb-4 last:border-0"
                    >
                      <div className="flex-shrink-0 h-24 w-24">
                        <img
                          src={`${baseUrliMAGE}${product?.product?.images[0]}`}
                          alt={product?.product?.productName}
                          className="h-full w-full object-cover rounded"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-md font-medium text-gray-900">
                          {product?.product?.productName}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Quantity: {product?.quantity}
                        </p>
                        <div className="flex items-center mt-2">
                          <FaRupeeSign className="text-gray-400" />
                          <span className="text-gray-900 ml-1">
                            {product?.price}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-md font-medium text-gray-900">
                          Total
                        </p>
                        <div className="flex items-center mt-2">
                          <FaRupeeSign className="text-gray-400" />
                          <span className="text-gray-900 ml-1">
                            {product?.total}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FaTruck className="text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Shipping Address</p>
                      <p className="text-sm text-gray-900">
                        {order.shippingAddress.address},{" "}
                        {order.shippingAddress.state},{" "}
                        {order.shippingAddress.country} -{" "}
                        {order.shippingAddress.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCreditCard className="text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Payment Status</p>
                      <p className="text-sm text-gray-900 capitalize">
                        {order.paymentStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <div className="flex items-center justify-end">
                    <FaRupeeSign className="text-gray-900" />
                    <span className="text-xl font-bold text-gray-900 ml-1">
                      {order.totalAmount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
