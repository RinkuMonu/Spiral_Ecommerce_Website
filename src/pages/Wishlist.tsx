// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeItemFromWishlist, clearWishlist } from "../reduxslice/WishlistSlice";
// import { Trash2, Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Wishlist = () => {
//   const wishlistItems = useSelector((state: any) => state.wishlist.items);
//   const dispatch = useDispatch();

//   const handleRemove = (id: string) => {
//     dispatch(removeItemFromWishlist(id));
//   };

//   const handleClear = () => {
//     if (wishlistItems.length > 0) {
//       if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
//         dispatch(clearWishlist());
//       }
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
//             <Heart className="text-rose-500 fill-rose-100" size={28} />
//             Your Wishlist
//           </h1>
//           <p className="text-gray-500 mt-2">
//             {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
//           </p>
//         </div>

//         {wishlistItems.length > 0 && (
//           <button
//             onClick={handleClear}
//             className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors duration-200"
//           >
//             <Trash2 size={18} />
//             Clear All
//           </button>
//         )}
//       </div>

//       {wishlistItems.length === 0 ? (
//         <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
//           <div className="mx-auto bg-rose-50 w-24 h-24 rounded-full flex items-center justify-center mb-6">
//             <Heart className="text-rose-500" size={48} strokeWidth={1.5} />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h3>
//           <p className="text-gray-600 max-w-md mx-auto mb-8">
//             Start adding items you love! Click the heart icon on any product to save it here.
//           </p>
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
//           >
//             <ArrowLeft size={18} />
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-6">
//           {wishlistItems.map((item: any) => (
//             <div
//               key={item.id}
//               className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row"
//             >
//               <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full sm:w-40 h-40 object-contain rounded-xl bg-gray-50 p-4"
//                 />
//               </div>

//               <div className="flex-grow">
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
//                     <p className="text-lg font-bold text-indigo-600 mb-2">₹{item.price}</p>
//                     <p className="text-gray-500 text-sm mb-3">{item.category}</p>

//                     <div className="flex items-center gap-3 mt-4">
//                       <button
//                         onClick={() => handleRemove(item.id)}
//                         className="flex items-center gap-1.5 text-gray-500 hover:text-rose-500 transition-colors text-sm"
//                       >
//                         <Trash2 size={16} />
//                         Remove
//                       </button>

//                       <button className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 transition-colors text-sm">
//                         <ShoppingBag size={16} />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex-shrink-0">
//                     <Link
//                       to={`/product/${item.id}`}
//                       className="inline-block px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
//                     >
//                       View Product
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {wishlistItems.length > 0 && (
//         <div className="mt-12 flex justify-between items-center flex-wrap gap-4">
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
//           >
//             <ArrowLeft size={18} />
//             Continue Shopping
//           </Link>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromWishlist, clearWishlist, fetchWishlist } from "../reduxslice/WishlistSlice";
import { Trash2, Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { items: wishlistItems, loading } = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  // const handleRemove = (id: string) => {
  //   dispatch(removeItemFromWishlist(id));
  // };

  const handleRemove = (id: string) => {
  dispatch(removeItemFromWishlist(id)).then(() => {
    dispatch(fetchWishlist());
  });
};

  const handleClear = () => {
    if (wishlistItems.length > 0 && window.confirm("Are you sure you want to clear your entire wishlist?")) {
      dispatch(clearWishlist());
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      {/* header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Heart className="text-rose-500 fill-rose-100" size={28} />
            Your Wishlist
          </h1>
          <p className="text-gray-500 mt-2">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
        {wishlistItems.length > 0 && (
          <button onClick={handleClear} className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors duration-200">
            <Trash2 size={18} />
            Clear All
          </button>
        )}
      </div>

      {/* loading */}
      {loading && <p className="text-center">Loading wishlist...</p>}

      {/* empty */}
      {!loading && wishlistItems.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
          <div className="mx-auto bg-rose-50 w-24 h-24 rounded-full flex items-center justify-center mb-6">
            <Heart className="text-rose-500" size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Start adding items you love! Click the heart icon on any product to save it here.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      )}

      {/* items */}
      <div className="grid grid-cols-1 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.product._id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <img
                src={item.product.images?.[0]}
                alt={item.product.productName}
                className="w-full sm:w-40 h-40 object-contain rounded-xl bg-gray-50 p-4"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.product.productName}
                  </h3>

                  {/* Show discounted price if exists */}
                  <p className="text-lg font-bold text-indigo-600 mb-2">
                    ₹{item.product.actualPrice}
                    {item.product.discount ? (
                      <span className="text-sm text-gray-500 line-through ml-2">₹{item.product.price}</span>
                    ) : null}
                  </p>

                  {/* Discount percent */}
                  {item.product.discount ? (
                    <p className="text-green-600 text-sm mb-3">
                      {item.product.discount}% off
                    </p>
                  ) : null}

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => handleRemove(item.product._id)}
                      className="flex items-center gap-1.5 text-gray-500 hover:text-rose-500 transition-colors text-sm"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    to={`/product/${item.product._id}`}
                    className="inline-block px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {wishlistItems.length > 0 && (
        <div className="mt-12 flex justify-between items-center flex-wrap gap-4">
          <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
