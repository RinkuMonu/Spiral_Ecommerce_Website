"use client"
import type React from "react"
import { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import { ChevronLeft, Wallet, Check, CreditCard, Clock, Shield } from "lucide-react"
import logo from "../assest/logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface Address {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  isDefault?: boolean
}

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface ShippingMethod {
  id: string
  name: string
  description: string
  price: number
}

interface CouponCode {
  code: string
  discount: string
  description: string
}

const addresses: Address[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    isDefault: true,
  },
]

const shippingMethods: ShippingMethod[] = [
  { id: "1", name: "Free Delivery", description: "Free shipping", price: 0 },
  { id: "2", name: "Local Pickup", description: "Free shipping", price: 0 },
  { id: "3", name: "Flat Rate", description: "Fixed rate shipping", price: 20 },
]

const coupons: CouponCode[] = [
  {
    code: "SAVE80",
    discount: "80%",
    description: "Discount 80% for all orders",
  },
  {
    code: "FLAT500",
    discount: "₹500",
    description: "Flat ₹500 off on all orders",
  },
]

function AddressShipping({ cartItems }) {
  const [isNewAddress, setIsNewAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<string>("")
  const [selectedShipping, setSelectedShipping] = useState<string>("1")
  const [selectedPayment, setSelectedPayment] = useState<string>("")
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [upiIntent, setUpiIntent] = useState(null)
  const [isloading, setIsLoading] = useState(false)
  const [reference, setReference] = useState("")
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(0)
  const [startTimer, setStartTimer] = useState(false)
  const [pinCode, setPinCode] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address: "",
  })

  const token = "zsdfgyxchh"

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = shippingMethods.find((m) => m.id === selectedShipping)?.price || 0
  const total = subtotal + shipping

  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setIsNewAddress(value === "new")
    setSelectedAddress(value)
  }

  const generateReferenceNumber = () => {
    const timestamp = Date.now()
    const randomNum = Math.floor(Math.random() * 10000)
    return `${timestamp}${randomNum}`
  }

  const handlePayment = async () => {
    if (!userdata.name || !userdata.phone || !userdata.email) {
      alert("Please fill all required shipping fields.")
      return
    }
    setIsLoading(true)
    const newRef = generateReferenceNumber()
    setReference(newRef)

    try {
      const gatewayConfigs = {
        upi1: {
          apiUrl: "https://api.worldpayme.com/",
          payload: {
            amount: total.toString(),
            reference: newRef,
            name: userdata.name,
            mobile: userdata.phone,
            email: userdata.email,
            userId: "67b6f05e6",
            myip: "666666",
          },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          extractIntent: (res) => res.data?.data?.upiIntent,
        },
        upi2: {
          apiUrl: "https://api.worldpayme.com/",
          payload: {
            amount: total.toString(),
            reference: newRef,
            name: userdata.name,
            mobile: userdata.phone,
            email: userdata.email,
            userId: "67b6f05e",
            myip: "666666",
          },
          headers: {
            Authorization: `Bearer -xebvWE39ZySDpB9DjLtQ4jxjQbyer6I`,
            "Content-Type": "application/json",
          },
          extractIntent: (res) => res.data?.data?.upiIntent || res.data?.upiUrl,
        },
      }

      if (!selectedPayment) {
        alert("Please select a payment method.")
        setIsLoading(false)
        return
      }

      const config = gatewayConfigs[selectedPayment]
      if (!config) throw new Error("Unsupported payment method")

      const response = await axios.post(config.apiUrl, config.payload, {
        headers: config.headers,
      })

      const rawLink = config.extractIntent(response)
      const cleanedLink = rawLink.replace(/\\/g, "")
      console.log("cleanedLink", rawLink)
      setUpiIntent(cleanedLink)
      setTimeLeft(240)
      setStartTimer(true)
    } catch (error) {
      console.error("Payment Error:", error)
      alert("Payment initiation failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleonChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userdata, [name]: value })
  }

  useEffect(() => {
    if (pinCode.length === 6) {
      fetchLocation(pinCode)
    }
  }, [pinCode])

  const fetchLocation = async (pin) => {
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`)
      console.log("API Response:", response.data)
      if (response.data[0].Status === "Success") {
        const location = response.data[0].PostOffice[0]
        setState(location.State)
        setCity(location.District)
      } else {
        setState("")
        setCity("")
        console.warn("Invalid PIN code")
      }
    } catch (error) {
      console.error("Error fetching location:", error)
    }
  }

  let totalTime = 0
  useEffect(() => {
    if (!reference) return
    const maxDuration = 4 * 60 * 1000
    const intervalTime = 15000
    const interval = setInterval(async () => {
      totalTime += intervalTime
      try {
        setIsLoading(true)
        const response = await axios.get(
          `https://api.worldpayme.com/api/v1.1/payinTransactionCheckStatus/${reference}`,
          {
            headers: {
              Authorization: `Bearer ${
                selectedPayment === "upi1"
                  ? token
                  : "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4IiwianRpIjoiNzE1ZDJlODJiZTYxYzdiYjk1YzZhNDA0ZTdlYTNiZDRjOTNkYWRmNWEzYmJiYmExYmFhNTI2ZGIxNzVkNjhhNmI1YmZjZWU3N2ZmMTgwMDkiLCJpYXQiOjE3NDg1MTgwNTYuMjcyNDQyLCJuYmYiOjE3NDg1MTgwNTYuMjcyNDQ0LCJleHAiOjE3ODAwNTQwNTYuMjY5OTk3LCJzdWIiOiIzMDMiLCJzY29wZXMiOltdfQ.ElJzC40DRfPxMCJn8hKPJwOQqinyzK2yRONmLIky4IElGAeDJzghUbiBQg6uVIe0qMnQZCTY66trEbVh25TJZYpWv_rEyP4LYMhFNtyHOyEothKg-RAWt99y4baqf10wp5Mfl1YdUI3lQaYHKYF1B0y8gJFtLghvj8nxsWdi5a_V7TfkzcGGWy5HtqZnaYyDWxJCSIjm41E2mfJVoDrGz5_DMHCQq50JHN8rJwlx4R6pH4uD-D-xoYZsTgdg94ogkuuyWRpNpHTPx6ku9D6AVqO4gz8pGysphatUaIUeAHciNDNVW_hU3ReHMXUc6GsySmPjoogmRZJqtrtv432N4dhVZYZM8uPH8LmI437xsiT8Pwh8eigfJeiizElf0_sMgeNL7wwfkfsIkjWiNQlai9l0tgXpkSh_B4WHwbGMlhjN-xebvWE3NmiUu8Ut9m-aHyL-TCLX_hbkGepgEBilGiyqPzbpP9oNPXO7t3Js4MxAaFQjP4M2hHyHfxMPUUCbUEboS2cdL9uQpag_X9Z7w9cQMTaC6bFjv-RuAJhwGvSMHvs3paOZqdZxRd4bwybXUyCIisqdG1FHoFgPoz5tA5bYZ8CpILbYGuxPHeCpN51c0_QhOfGcEUT5st7PUadqwiQG1WJBOQ6XHquUNAt9ZySDpB9DjLtQ4jxjQbyer6I"
              }`,
              "Content-Type": "application/json",
            },
          },
        )
        console.log("responseeeeeeeeee", response.data)
        const { data } = response.data
        const txnStatus = data?.status || "Unknown"
        if (txnStatus === "Success" || txnStatus === "Failed") {
          clearInterval(interval)
          navigate(`/resultPage?status=${txnStatus}&txnId=${data.transactionNo}`)
        } else if (totalTime >= maxDuration) {
          clearInterval(interval)
          navigate(`/resultPage?status=timeout&txnId=${reference}`)
        }
      } catch (error) {
        console.error("Error fetching payout status:", error)
        clearInterval(interval)
      } finally {
        setIsLoading(false)
      }
    }, intervalTime)
    return () => clearInterval(interval)
  }, [reference])

  useEffect(() => {
    if (!startTimer || timeLeft <= 0) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [startTimer, timeLeft])

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")
    const sec = (seconds % 60).toString().padStart(2, "0")
    return `${min}:${sec}`
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10 pb-8 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Checkout</h1>
          <p className="text-gray-600">Complete your order details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              {/* Logo */}
              <div className="mb-6">
                <img src={logo || "/placeholder.svg"} alt="logo" className="w-32 h-auto" />
              </div>

              {/* Shipping Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Shipping Information</h2>
                <div className="space-y-4">
                  {/* Address Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Address</label>
                    <select
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      value={selectedAddress}
                      onChange={handleAddressChange}
                      style={{ focusRingColor: "#6aa1c1" }}
                    >
                      <option value="">Select Address</option>
                      <option value="new">Add new address...</option>
                    </select>
                  </div>

                  {/* New Address Form */}
                  {isNewAddress && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            value={userdata.name}
                            onChange={handleonChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            value={userdata.phone}
                            onChange={handleonChange}
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          value={userdata.email}
                          onChange={handleonChange}
                          placeholder="Enter email address"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            value={pinCode}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "").slice(0, 6)
                              setPinCode(val)
                            }}
                            placeholder="Enter PIN code"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 bg-gray-100"
                            value={state}
                            readOnly
                            placeholder="Auto-filled"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 bg-gray-100"
                            value={city}
                            readOnly
                            placeholder="Auto-filled"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea
                          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          rows={3}
                          placeholder="Enter complete address"
                        />
                      </div>
                    </div>
                  )}

                  {/* Selected Address Display */}
                  {selectedAddress && selectedAddress !== "new" && (
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      {addresses
                        .filter((addr) => addr.id === selectedAddress)
                        .map((address) => (
                          <div key={address.id}>
                            <h3 className="font-semibold text-gray-900">{address.name}</h3>
                            <p className="text-gray-600 mt-1">{address.address}</p>
                            <p className="text-gray-600">
                              <span className="font-medium">Phone:</span> {address.phone}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Email:</span> {address.email}
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Shipping Method */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Shipping Method</h2>
                <div className="space-y-3">
                  {shippingMethods.map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={selectedShipping === method.id}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                        style={{ accentColor: "#6aa1c1" }}
                      />
                      <div className="ml-3">
                        <span className="block font-medium text-gray-900">
                          {method.name}
                          {method.price > 0 && ` - ₹${method.price}`}
                        </span>
                        <span className="text-gray-500 text-sm">{method.description}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="upi1"
                      checked={selectedPayment === "upi1"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                      style={{ accentColor: "#6aa1c1" }}
                    />
                    <div className="ml-3">
                      <span className="block font-medium text-gray-900">UPI Gateway 1</span>
                      <span className="text-gray-500 text-sm">Pay using UPI Gateway 1</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="upi2"
                      checked={selectedPayment === "upi2"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                      style={{ accentColor: "#6aa1c1" }}
                    />
                    <div className="ml-3">
                      <span className="block font-medium text-gray-900">UPI Gateway 2</span>
                      <span className="text-gray-500 text-sm">Pay using UPI Gateway 2</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Notes */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  rows={3}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Cart
                </Link>
                {total === 0 ? (
                  <p className="text-gray-500">Your Cart Is Empty - Please Add Something</p>
                ) : (
                  <button
                    className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                    style={{ background: "#6aa1c1" }}
                    onClick={handlePayment}
                    disabled={isloading}
                  >
                    {isloading ? (
                      <DotLottieReact
                        src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                        loop
                        autoplay
                        style={{ width: 24, height: 24 }}
                      />
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        Place Order
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* QR Code Section */}
            {upiIntent && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Complete Your Payment</h3>
                <p className="text-gray-600 mb-6">Scan this QR code with any UPI app to complete your payment</p>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                    <QRCode value={upiIntent} size={200} />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: "#6aa1c1" }} />
                  <span className="text-lg font-semibold" style={{ color: "#6aa1c1" }}>
                    Time remaining: {formatTime(timeLeft)}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-6 h-6 mx-auto mb-1" style={{ color: "#6aa1c1" }} />
                    <p className="text-sm font-medium text-gray-900">Secure</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <CreditCard className="w-6 h-6 mx-auto mb-1" style={{ color: "#6aa1c1" }} />
                    <p className="text-sm font-medium text-gray-900">UPI Payment</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Check className="w-6 h-6 mx-auto mb-1" style={{ color: "#6aa1c1" }} />
                    <p className="text-sm font-medium text-gray-900">Instant</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      // src={item.image || "/placeholder.svg"}
                      src={`http://api.jajamblockprints.com${item.images}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      <p className="font-medium text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Coupon Section */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wallet className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-900">Available Coupons</span>
                </div>
                <div className="space-y-3">
                  {coupons.map((coupon) => (
                    <div key={coupon.code} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-medium" style={{ color: "#6aa1c1" }}>
                            {coupon.discount} OFF
                          </span>
                          <p className="text-sm text-gray-500">{coupon.description}</p>
                        </div>
                        <button
                          className="text-sm font-medium px-3 py-1 rounded-md border transition-colors"
                          style={{
                            color: "#6aa1c1",
                            borderColor: "#6aa1c1",
                          }}
                        >
                          Apply
                        </button>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 p-2 rounded text-sm">
                        <code className="font-mono">{coupon.code}</code>
                        <button className="text-gray-500 ml-auto">Copy</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowCouponInput(!showCouponInput)}
                  className="text-sm font-medium mt-3"
                  style={{ color: "#6aa1c1" }}
                >
                  {showCouponInput ? "Hide coupon input" : "Have a coupon code?"}
                </button>
                {showCouponInput && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter coupon code"
                    />
                    <button
                      className="px-4 py-2 text-white rounded-lg text-sm font-medium"
                      style={{ background: "#6aa1c1" }}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressShipping
