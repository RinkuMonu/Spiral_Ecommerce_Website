// import React, { useEffect, useState } from "react";
// import { Eye, Heart, ShoppingCart } from "lucide-react";
// import { products } from "../../data/products"; // Import shared products data
// import { Link } from "react-router-dom";
// import axios from "axios";



// const TrendingProducts = ({
//   addToCart,
// }: {
//   addToCart: (product: any) => void;
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

//   useEffect(() => {
//     // Lock scroll on the background when modal is open
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Cleanup on unmount
//     };
//   }, [isModalOpen]);

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const [quantity, setQuantity] = useState(1);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };


//   // api call ke liye

// // const [products, setProducts] = useState([]);

// // useEffect(() => {
// // axios.get("http://localhost:5000/api/product/getproducts")
// //     .then((res) => setProducts(res.data))
// //     .catch((err) => console.error(err));
// // }, []);

// // console.log("products : : -",products);

//   return (
//     <section className="py-16 bg-white px-20">
//       <div className="container  sm:px-4">
//         <h2 className="text-4xl font-bold mb-8">
//           <span className="text-[#5252a2]">Trending</span> Products
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.slice(0, 10).map((product) => (
//             <div
//               key={product.id}
//               className="group grid grid-cols-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
//             >
//               <div className="relative overflow-hidden cursor-pointer "  onClick={openModal}>
//                 <img
//                   className="p-8 rounded-lg w-96 h-64 object-contain transform  transition duration-300"
//                   src={product.image}
//                   alt={product.name}
//                 />
//                 {/* This div will become visible when hovered */}
//                 <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />

//                 <div className="absolute left-5 top-[57px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-opacity duration-300">
//                   <div className="flex flex-col">
//                     {/* Action buttons */}
//                     <button
//                       onClick={() => addToCart(product)}
//                       type="button"
//                       className="relative flex items-center justify-center bg-white text-black rounded-full shadow-sm text-xl h-[42px] w-[42px] mb-1.5 cursor-pointer hover:text-white hover:bg-black group"
//                     >
//                       <ShoppingCart />
//                       <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                         Cart
//                       </span>
//                     </button>

//                     <button
//                       type="button"
//                       onClick={openModal}
//                       className="relative flex items-center justify-center bg-white text-black rounded-full shadow-sm text-xl h-[42px] w-[42px] mb-1.5 cursor-pointer hover:text-white hover:bg-black group"
//                     >
//                       <Eye />
//                       <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                         View
//                       </span>
//                     </button>

//                     {/* Modal */}
//                     {isModalOpen && (
//                       <div
//                         id="default-modal"
//                         tabIndex={-1}
//                         aria-hidden="true"
//                         className="fixed  inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
//                         onClick={closeModal}
//                       >
//                         <div
//                           className="relative bottom-4 p-4 w-full max-w-[80vw] bg-white rounded-lg shadow-lg mt-10 grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto "
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <div className="flex items-center justify-center p-10">
//                             <img
//                               className="p-8 rounded-lg w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
//                               src={product.image}
//                               alt={product.name}
//                             />
//                           </div>

//                           {/* Modal content */}
//                           <div className="relative">
//                             {/* Modal header */}
//                             <div className="flex items-center justify-between py-4 rounded-t">
//                               <h3 className="text-3xl font-semibold text-gray-900">
//                                 {product.name}
//                                 <div className="flex items-center mt-2.5 ">
//                                   <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                                     <svg
//                                       className="w-4 h-4 text-yellow-300"
//                                       aria-hidden="true"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                       fill="currentColor"
//                                       viewBox="0 0 22 20"
//                                     >
//                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg
//                                       className="w-4 h-4 text-yellow-300"
//                                       aria-hidden="true"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                       fill="currentColor"
//                                       viewBox="0 0 22 20"
//                                     >
//                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg
//                                       className="w-4 h-4 text-yellow-300"
//                                       aria-hidden="true"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                       fill="currentColor"
//                                       viewBox="0 0 22 20"
//                                     >
//                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg
//                                       className="w-4 h-4 text-yellow-300"
//                                       aria-hidden="true"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                       fill="currentColor"
//                                       viewBox="0 0 22 20"
//                                     >
//                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg
//                                       className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                                       aria-hidden="true"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                       fill="currentColor"
//                                       viewBox="0 0 22 20"
//                                     >
//                                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                   </div>
//                                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//                                     {product.rating}
//                                   </span>
//                                 </div>
//                               </h3>
//                               <button
//                                 type="button"
//                                 onClick={closeModal}
//                                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
//                               >
//                                 <svg
//                                   className="w-3 h-3"
//                                   aria-hidden="true"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 14 14"
//                                 >
//                                   <path
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                                   />
//                                 </svg>
//                                 <span className="sr-only">Close modal</span>
//                               </button>
//                             </div>

//                             {/* Modal body */}
//                             <div className="p-4">
//                               {/* <ul className="text-base text-gray-500 list-disc">
//                                 <li className="py-2">
//                                   Operating System: Windows 11 Home
//                                 </li>
//                                 <li className="py-2">
//                                   Processor: Intel Core Celeron N4500
//                                 </li>
//                                 <li className="py-2">
//                                   Display: 35.6 cm (14") Display with TN, HD
//                                   1366 x 768, Acer ComfyView LED-backlit TFT
//                                   LCD, 16:9 aspect ratio, Ultra-slim design,
//                                   Mercury free, environment friendly
//                                 </li>
//                                 <li className="py-2">
//                                   Graphics: Intel UHD Graphics
//                                 </li>
//                               </ul> */}


//                               <ul className="text-base text-gray-500 list-disc">
//                                 <li className="py-2">Fabric: Banarasi Silk with Zari Work</li>
//                                 <li className="py-2">Occasion: Wedding, Festive, Party Wear</li>
//                                 <li className="py-2">Length: 6.3 meters including blouse piece</li>
//                                 <li className="py-2">Blouse: Unstitched, 0.8 meters included</li>
//                               </ul>


//                               <div className="flex items-center justify-between py-6">
//                                 <span className="text-xl font-bold text-gray-900">
//                                   ₹{product.price}
//                                 </span>
//                               </div>

//                               <span className="text-green-500">Available</span>

//                               <div className="">
//                                 {/* Quantity */}
//                                 <h2 className="py-2">Quantity</h2>
//                                 <div className="flex justify-between">
//                                   <div className="flex items-center space-x-4 mb-4">
//                                     <button
//                                       onClick={handleDecrease}
//                                       className="px-3 py-1 border rounded hover:bg-gray-100"
//                                     >
//                                       -
//                                     </button>
//                                     <span className="text-lg font-medium">
//                                       {quantity}
//                                     </span>
//                                     <button
//                                       onClick={handleIncrease}
//                                       className="px-3 py-1 border rounded hover:bg-gray-100"
//                                     >
//                                       +
//                                     </button>
//                                   </div>

//                                   {/* Add to Cart */}
//                                   <div
//                                     className="flex items-center space-x-2 mb-4"
//                                     onClick={() => addToCart(product)}
//                                   >
//                                     <button className="flex-1 px-16 py-2 border rounded bg-white hover:bg-gray-100">
//                                       Add To Cart
//                                     </button>
//                                   </div>
//                                 </div>

//                                 {/* Buy Now */}
//                                 <div className="mb-4">
//                                   <Link to="/address">
//                                     <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
//                                       Buy Now
//                                     </button>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <button
//                       type="button"
//                       className="relative flex items-center justify-center bg-white text-black rounded-full shadow-sm text-xl h-[42px] w-[42px] mb-1.5 cursor-pointer hover:text-white hover:bg-black group"
//                     >
//                       <Heart />
//                       <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                         Wishlist
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-5 pb-5">
//                 <a href="#">
//                   <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
//                     {product.name}
//                   </h5>
//                 </a>
//                 <div className="flex items-center mt-2.5 mb-5">
//                   <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                     <svg
//                       className="w-4 h-4 text-yellow-300"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                       className="w-4 h-4 text-yellow-300"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                       className="w-4 h-4 text-yellow-300"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                       className="w-4 h-4 text-yellow-300"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                       className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                   </div>
//                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//                     {product.rating}
//                   </span>products
//                 </div>

//                 <p className="text-gray-600">{product.category}</p>
//                 <p className="text-xl font-bold">₹{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingProducts;


//=================================================================================================================

// import React, { useEffect, useState } from "react";
// import { Eye, Heart, ShoppingCart, Star, X } from "lucide-react";
// import { products } from "../../data/products";
// import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { addItemToWishlist } from "../../reduxslice/WishlistSlice";


// const TrendingProducts = ({ addToCart }: { addToCart: (product: any) => void }) => {
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isModalOpen]);

//   const openProductModal = (product: any) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => setSelectedProduct(null), 300);
//   };

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => quantity > 1 && setQuantity((prev) => prev - 1);

//   const handleAddToCart = (product: any) => {
//     addToCart({ ...product, quantity });
//     closeModal();
//   };

//   // Render stars based on rating
//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<Star key={`full-${i}`} size={16} className="fill-yellow-400 stroke-yellow-400" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<Star key="half" size={16} className="fill-yellow-400 stroke-yellow-400" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<Star key={`empty-${i}`} size={16} className="stroke-gray-300" />);
//     }

//     return stars;
//   };

//   const dispatch = useDispatch();

//   const handleAddToWishlist = (product: any) => {
//     dispatch(addItemToWishlist(product));
//   };


//   return (
//     <section className="py-16 bg-white px-4 sm:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-2">
//             <span className="text-[#5252a2]">Trending</span> Products
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover our most popular items loved by customers
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {products.slice(0, 8).map((product) => (
//             <div
//               key={product.id}
//               className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
//             >
//               <div className="relative aspect-square overflow-hidden">
//                 <img
//                   className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition duration-300"
//                   src={product.image}
//                   alt={product.name}
//                 />

//                 {/* Floating action buttons */}
//                 <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="bg-white rounded-full p-2 shadow-md hover:bg-indigo-600 hover:text-white transition-colors"
//                     aria-label="Add to cart"
//                   >
//                     <ShoppingCart size={18} />
//                   </button>

//                   <button
//                     onClick={() => openProductModal(product)}
//                     className="bg-white rounded-full p-2 shadow-md hover:bg-indigo-600 hover:text-white transition-colors"
//                     aria-label="Quick view"
//                   >
//                     <Eye size={18} />
//                   </button>

//                   {/* <button
//                     className="bg-white rounded-full p-2 shadow-md hover:bg-indigo-600 hover:text-white transition-colors"
//                     aria-label="Add to wishlist"
//                   >
//                     <Heart size={18} />
//                   </button> */}

//                   <button
//                     onClick={() => handleAddToWishlist(product)}
//                     className="bg-white rounded-full p-2 shadow-md hover:bg-indigo-600 hover:text-white transition-colors"
//                     aria-label="Add to wishlist"
//                   >
//                     <Heart size={18} />
//                   </button>

//                 </div>
//               </div>

//               <div className="p-5">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1">{product.category}</p>
//                   </div>
//                   <div className="text-right">
//                     <div className="flex items-center">
//                       <span className="text-lg font-bold text-[#5252a2]">₹{product.price}</span>
//                       {product.originalPrice && (
//                         <span className="text-sm text-gray-400 line-through ml-2">
//                           ₹{product.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     {product.discount && (
//                       <span className="text-xs font-medium bg-red-100 text-red-600 px-1.5 py-0.5 rounded ml-2">
//                         {product.discount}% OFF
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="mt-4 flex justify-between items-center">
//                   <div className="flex items-center">
//                     <div className="flex mr-1">
//                       {renderStars(product.rating)}
//                     </div>
//                     <span className="text-sm text-gray-500 ml-1">
//                       ({product.reviews})
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => addToCart(product)}
//                     className="text-sm font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Product Quick View Modal */}
//       {isModalOpen && selectedProduct && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div
//             className={`relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700 transition-colors"
//                 aria-label="Close"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="flex items-center justify-center">
//                 <img
//                   className="rounded-xl object-contain max-h-[400px]"
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                 />
//               </div>

//               <div>
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                     {selectedProduct.name}
//                   </h3>
//                   <div className="flex items-center mb-4">
//                     <div className="flex mr-2">
//                       {renderStars(selectedProduct.rating)}
//                     </div>
//                     <span className="text-sm text-gray-500">
//                       ({selectedProduct.reviews} reviews)
//                     </span>
//                   </div>

//                   <div className="flex items-center mb-4">
//                     <span className="text-2xl font-bold text-[#5252a2] mr-3">
//                       ₹{selectedProduct.price}
//                     </span>
//                     {selectedProduct.originalPrice && (
//                       <span className="text-lg text-gray-400 line-through">
//                         ₹{selectedProduct.originalPrice}
//                       </span>
//                     )}
//                     {selectedProduct.discount && (
//                       <span className="ml-3 text-sm font-medium bg-red-100 text-red-600 px-2 py-1 rounded">
//                         {selectedProduct.discount}% OFF
//                       </span>
//                     )}
//                   </div>

//                   <p className="text-gray-600 mb-6">
//                     {selectedProduct.description || "Premium quality product with modern design and excellent craftsmanship. Perfect for all occasions."}
//                   </p>
//                 </div>

//                 <div className="mb-8">
//                   <h4 className="text-lg font-semibold mb-3">Product Details</h4>
//                   <ul className="space-y-2">
//                     <li className="flex">
//                       <span className="text-gray-600 min-w-[120px]">Category</span>
//                       <span className="font-medium">{selectedProduct.category}</span>
//                     </li>
//                     <li className="flex">
//                       <span className="text-gray-600 min-w-[120px]">Material</span>
//                       <span className="font-medium">Premium Silk</span>
//                     </li>
//                     <li className="flex">
//                       <span className="text-gray-600 min-w-[120px]">Color</span>
//                       <span className="font-medium">Royal Blue</span>
//                     </li>
//                     <li className="flex">
//                       <span className="text-gray-600 min-w-[120px]">Availability</span>
//                       <span className="font-medium text-green-600">In Stock</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="flex flex-wrap gap-4">
//                   {/* <div className="flex items-center border rounded-lg overflow-hidden">
//                     <button
//                       onClick={handleDecrease}
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
//                       aria-label="Decrease quantity"
//                     >
//                       -
//                     </button>
//                     <span className="px-4 py-2 w-12 text-center font-medium">
//                       {quantity}
//                     </span>
//                     <button
//                       onClick={handleIncrease}
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
//                       aria-label="Increase quantity"
//                     >
//                       +
//                     </button>
//                   </div> */}

//                   <button
//                     onClick={() => handleAddToCart(selectedProduct)}
//                     className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors min-w-[150px]"
//                   >
//                     Add to Cart
//                   </button>

//                   <Link
//                     to="/address"
//                     className="flex-1"
//                     onClick={closeModal}
//                   >
//                     <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
//                       Buy Now
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default TrendingProducts;



//======================================================================================================================




import React, { useEffect, useState } from "react";
import { Eye, Heart, ShoppingCart, Star, X } from "lucide-react";
// import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToWishlist } from "../../reduxslice/WishlistSlice";
import { addItemToCart } from "../../reduxslice/CartSlice";



const TrendingProducts = ({ addToCart }: { addToCart: (product: any) => void }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]); // ✅ State for dynamic products

  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => quantity > 1 && setQuantity((prev) => prev - 1);

  // const handleAddToCart = (product: any) => {
  //   addToCart({ ...product, quantity });
  //   closeModal();
  // };

// const handleAddToCart = (product: any) => {
//   addToCart({
//     id: product._id, // ✔ correct id
//     name: product.productName, // ✔ correct name
//     image: product.images?.[0] || "", // ✔ correct image
//     category: product.category?.name || "Uncategorized",
//     price: product.actualPrice || product.price, // ✔ correct price
//     quantity,
//   });
//   closeModal();
// };


const handleAddToCart = (product: any) => {
  dispatch(
    addItemToCart({
      id: product._id,
      name: product.productName,
      image: product.images?.[0] || "",
      category: product.category?.name || "Uncategorized",
      price: product.actualPrice || product.price,
      quantity,
    })
  );
  closeModal();
};


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-200"}`}
      />
    ));
  };

  // const handleAddToWishlist = (product: any) => {
  //   dispatch(addItemToWishlist(product));
  // };

//   const handleAddToWishlist = (product: any) => {
//   const wishlistItem = {
//     id: product._id,
//     name: product.productName,
//     price: product.actualPrice,
//     image: product.images?.[0],
//     category: product.category?.name || "Uncategorized",
//   };

//   dispatch(addItemToWishlist(wishlistItem));
// };

const handleAddToWishlist = (product: any) => {
  dispatch(addItemToWishlist(product._id));
};

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE;


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
        `${baseUrl}/product/getproducts?referenceWebsite=${referenceWebsite}`
      );
        const data = await res.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Unexpected products format:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-indigo-600 mr-4"></div>
            <h2 className="text-lg font-semibold text-indigo-600 tracking-wider">
              TRENDING COLLECTION
            </h2>
            <div className="w-12 h-0.5 bg-indigo-600 ml-4"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gray-900">Popular</span>{" "}
            <span className="text-indigo-600">Products</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items loved by customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product._id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                  <img
                    className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                    src={product.images?.[0]}
                    alt={product.productName}
                  />
                </div>

                {product.discount && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                    {product.discount}% OFF
                  </div>
                )}

                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <ShoppingCart size={18} />
                  </button>

                  <button
                    onClick={() => openProductModal(product)}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <Heart
                      size={18}
                      className={hoveredProduct === product._id ? "text-rose-500" : ""}
                    />
                  </button>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`absolute bottom-0 left-0 w-full bg-indigo-600 text-white py-3 text-center font-medium transition-all duration-300 ${hoveredProduct === product._id ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                >
                  ADD TO CART
                </button>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-1">
                      {product.productName}
                    </h3>
                    <p className="text-sm text-gray-500">{product.category?.name || "Uncategorized"}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold text-indigo-600">
                        ₹{product.actualPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex mr-1">
                      {renderStars(product.rating || 4)}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">reviews</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Product Quick View Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedProduct.productName}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                <img
                  className="rounded-xl object-contain max-h-[400px]"
                  src={selectedProduct.images?.[0]}
                  alt={selectedProduct.productName}
                />

              </div>

              <div>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(selectedProduct.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-indigo-600 mr-3">
                      ₹{selectedProduct.actualPrice}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{selectedProduct.price}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {selectedProduct.description || "Premium quality product with modern design and excellent craftsmanship. Perfect for all occasions."}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
                    Product Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Category</span>
                      <span className="font-medium">{selectedProduct.category?.name || "Uncategorized"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Material</span>
                      <span className="font-medium">Premium Silk</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Color</span>
                      <span className="font-medium">Royal Blue</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Availability</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-full sm:w-auto">
                    <button
                      onClick={handleDecrease}
                      className="px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-600"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-3 w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrease}
                      className="px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-600"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div> */}

                  <div className="flex flex-1 gap-4">
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>

                    {/* <Link
                      to="/address"
                      className="flex-1"
                      onClick={closeModal}
                    >
                      <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl" 
                      >
                        Buy Now
                      </button>
                    </Link> */}

                     <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 bg-pink-600 hover:bg-indigo-900 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingProducts;