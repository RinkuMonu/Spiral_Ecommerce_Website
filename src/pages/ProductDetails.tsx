// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/products"; // Assuming you have sample products data
// import { Product } from "../types";
// import ProductCard from "../components/products/ProductCard";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterestP,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaEnvelope,
//   FaRegCopy,
// } from "react-icons/fa";
// import { Eye, Heart, ShoppingCart } from "lucide-react";

// interface ProductDetailsProps {
//   addToCart: (product: Product) => void;
// }


// const ProductDetails = ({ addToCart }: ProductDetailsProps) => {
//   const [quantity, setQuantity] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   const [activeTab, setActiveTab] = useState<"description" | "reviews">(
//     "description"
//   );
//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const { id } = useParams();

//   // Convert id to number before comparing
//   const product = products.find((prod) => prod.id === parseInt(id!)); // Use parseInt to ensure both sides are numbers

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div
//         className="relative  bg-white grid grid-cols-1 md:grid-cols-2"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-center p-10 lg:-mt-[400px]">
//           <img
//             className="p-8 rounded-lg w-100 h-100 object-cover transform group-hover:scale-105 transition duration-300"
//             src={product.image}
//             alt={product.name}
//           />
//         </div>

//         {/* Modal content */}
//         <div className="relative">
//           {/* Modal header */}
//           <div className="flex items-center justify-between py-4 rounded-t">
//             <h3 className="text-3xl font-semibold text-gray-900">
//               {product.name}
//               <div className="flex items-center mt-2.5 ">
//                 <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                   <svg
//                     className="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                   </svg>
//                   <svg
//                     className="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                   </svg>
//                   <svg
//                     className="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                   </svg>
//                   <svg
//                     className="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                   </svg>
//                   <svg
//                     className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                   </svg>
//                 </div>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//                   {product.rating}
//                 </span>
//               </div>
//             </h3>
//           </div>

//           {/* Modal body */}
//           <div className="p-4">

//             <ul className="text-base text-gray-500 list-disc">
//               <li className="py-2">Fabric Type: Banarasi Silk, Cotton Blend & Chanderi</li>
//               <li className="py-2">Product Includes: Saree with blouse, Semi-stitched Suit & 2.5m Unstitched Fabric</li>
//               <li className="py-2">Occasion: Ideal for Wedding, Festive, Office & Daily Wear</li>
//               <li className="py-2">Size Options: Saree - 6.3m, Fabric - 2.5m, Suit - Free Size (Semi-stitched)</li>
//               <li className="py-2">Work Details: Zari Weaving, Embroidery & Digital Print</li>
//               <li className="py-2">Wash Care: Hand Wash or Dry Clean Only</li>
//               <li className="py-2">Customization: Suit & Fabric can be tailored as per requirement</li>
//               <li className="py-2">Style: Traditional, Ethnic, Indo-Western depending on fabric selection</li>
//             </ul>

//             <div className="flex items-center justify-between py-6">
//               <span className="text-xl font-bold text-gray-900">
//                 ₹{product.price}
//               </span>
//             </div>

//             <span className="text-green-500">Available</span>

//             <div className="">
//               {/* Quantity */}
//               <h2 className="py-2">Quantity</h2>
//               <div className="flex justify-between">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <button
//                     onClick={handleDecrease}
//                     className="px-3 py-1 border rounded hover:bg-gray-100"
//                   >
//                     -
//                   </button>
//                   <span className="text-lg font-medium">{quantity}</span>
//                   <button
//                     onClick={handleIncrease}
//                     className="px-3 py-1 border rounded hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Add to Cart */}
//                 <div className="flex items-center space-x-2 mb-4" onClick={() => addToCart(product)}>
//                   <button className="flex-1 px-16 py-2 border rounded bg-white hover:bg-gray-100">
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>

//               {/* Buy Now */}
//               <div className="mb-4">
//                 <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700"
//                   onClick={() => addToCart(product)}>
//                   Buy Now
//                 </button>
//               </div>

//               {/* Wishlist and SKU */}
//               <div className="flex items-center justify-between text-sm mb-4">
//                 <button className="text-gray-500 hover:text-gray-700 text-xl">
//                   <span className="mr-1">♥</span> Add Wishlist
//                 </button>
//               </div>
//               <div>
//                 <hr></hr>
//               </div>
//               {/* SKU and Category */}
//               <div className="text-base py-6">
//                 <p className="text-black">SKU: SF-2443-CGOF</p>
//                 <p className="text-black">
//                   Category: <span className="text-gray-600">{product.category}</span>
//                 </p>
//               </div>

//               <div className="">


//                 {/* Share Section */}
//                 <div className="mb-4 flex items-center gap-4">
//                   <p className="text-base font-medium text-gray-700">Share:</p>
//                   <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-4 lg:grid-cols-7 items-center gap-6 text-gray-700">
//                     <FaFacebookF className="cursor-pointer hover:text-blue-600  rounded-full shadow-md w-12 h-12 p-3" />
//                     <FaTwitter className="cursor-pointer hover:text-blue-400 rounded-full shadow-md  w-12 h-12 p-3" />
//                     <FaPinterestP className="cursor-pointer hover:text-red-600 rounded-full shadow-md  w-12 h-12 p-3" />
//                     <FaLinkedinIn className="cursor-pointer hover:text-blue-700 rounded-full shadow-md  w-12 h-12 p-3" />
//                     <FaWhatsapp className="cursor-pointer hover:text-green-500 rounded-full shadow-md  w-12 h-12 p-3" />
//                     <FaEnvelope className="cursor-pointer hover:text-gray-700 rounded-full shadow-md  w-12 h-12 p-3" />
//                     <FaRegCopy className="cursor-pointer hover:text-gray-700 rounded-full shadow-md  w-12 h-12 p-3" />
//                   </div>
//                 </div>

//                 {/* Info Section */}
//                 <div className="mb-4 text-base text-gray-600">
//                   <p className="flex items-center space-x-2">
//                     <span>✔</span>
//                     <span>30 days easy returns</span>
//                   </p>
//                   <p className="flex items-center space-x-2 mt-2">
//                     <span>✔</span>
//                     <span>Order yours before 2:30pm for same day dispatch</span>
//                   </p>
//                 </div>

//                 {/* Guarantee Section */}
//                 <div className="py-4 px-8  bg-gray-100 text-base text-gray-600 rounded">
//                   Guaranteed safe & secure checkout
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="p-4">
//         {/* Tabs */}
//         <div className="flex gap-4 border-b my-12 justify-center">
//           <button
//             className={`px-4 py-2 text-xl font-medium ${activeTab === "description"
//               ? "border-b-2 border-black text-black"
//               : "text-gray-500"
//               }`}
//             onClick={() => setActiveTab("description")}
//           >
//             Description
//           </button>
//           <button
//             className={`px-4 py-2 text-xl font-medium ${activeTab === "reviews"
//               ? "border-b-2 border-black text-black"
//               : "text-gray-500"
//               }`}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews (0)
//           </button>
//         </div>

//         {/* Content */}
//         {activeTab === "description" && (

//           <div className="text-sm font-normal leading-6 mb-4 text-[#55585b] p-8">
//             <p className="leading-6 mb-4">
//               Grace your wardrobe with this elegant ethnic set including a Banarasi Saree,
//               a semi-stitched Chanderi suit, and a premium quality cotton fabric for custom tailoring.
//               Perfect for festive occasions, weddings, and casual wear alike. Designed with
//               tradition and comfort in mind.
//             </p>
//             <ul className="mt-2 list-disc list-inside">
//               <li className="leading-6 mb-4">Fabric: Banarasi Silk (Saree), Chanderi (Suit), Pure Cotton (Fabric)</li>
//               <li className="leading-6 mb-4">Inclusions: Saree with unstitched blouse (0.8m), Semi-stitched suit with dupatta, and 2.5m cotton fabric</li>
//               <li className="leading-6 mb-4">Occasion: Ideal for weddings, festive gatherings, and everyday ethnic looks</li>
//               <li className="leading-6 mb-4">Size: Saree – 6.3 meters, Fabric – 2.5 meters, Suit – Free Size (customizable)</li>
//               <li className="leading-6 mb-4">Work: Zari weaving, traditional embroidery, and printed motifs</li>
//               <li className="leading-6 mb-4">Wash Care: Hand wash or dry clean recommended for longevity</li>
//             </ul>
//           </div>

//         )}
//         {activeTab === "reviews" && (
//           <div className="text-sm text-gray-500">
//             <p>No reviews yet. Be the first to write a review!</p>
//           </div>
//         )}
//       </div>
//       <div className="my-8">
//         <h3 className="text-4xl font-bold flex items-center justify-center py-6">
//           Related Products
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-10">
//           {products.slice(0, 4).map((product) => (
//             <div
//               key={product.id}
//               className="group grid grid-cols-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   className="p-8 rounded-lg w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
//                   src={product.image}
//                   alt={product.name}
//                 />
//                 {/* This div will become visible when hovered */}
//                 <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />

//                 <div className="absolute left-5 top-[57px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-opacity duration-300">
//                   <div className="flex flex-col">
//                     {/* Action buttons */}
//                     <button
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

//                               <ul className="text-base text-gray-500 list-disc">
//                                 <li className="py-2">
//                                   Fabric Type: Banarasi Silk (Saree), Chanderi Cotton (Suit), Pure Cotton (Fabric)
//                                 </li>
//                                 <li className="py-2">
//                                   Inclusions: Saree with unstitched blouse, Semi-stitched suit with dupatta, 2.5m unstitched fabric
//                                 </li>
//                                 <li className="py-2">
//                                   Design & Work: Zari weaving on saree, Embroidered neck & sleeves on suit, and printed cotton fabric
//                                 </li>
//                                 <li className="py-2">
//                                   Occasion: Perfect for Weddings, Festive Celebrations, Ethnic Parties & Traditional Events
//                                 </li>
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
//                                   <div className="flex items-center space-x-2 mb-4" onClick={() => addToCart(product)}>
//                                     <button className="flex-1 px-16 py-2 border rounded bg-white hover:bg-gray-100"

//                                     >
//                                       Add To Cart
//                                     </button>
//                                   </div>
//                                 </div>

//                                 {/* Buy Now */}
//                                 <div className="mb-4">
//                                   <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
//                                     Buy Now
//                                   </button>
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
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xl font-bold text-gray-900">
//                     ₹{product.price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProductDetails;

"use client"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaRegCopy } from "react-icons/fa"
import Arrivals from "../components/home/Arrivals"

// Define Product type directly in this file as requested
interface Product {
  _id: string
  productName: string
  description: string
  images: string[]
  actualPrice: number
  price?: number // Original price, optional
  discount?: number // Discount percentage, optional
  size?: string // Size, optional
  category: {
    _id: string
    name: string
  }
  rating?: number // Rating, optional
  quantity?: number // Used in cart context, optional
}

interface ProductDetailsProps {
  addToCart: (product: Product) => void
}

const ProductDetails = ({ addToCart }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description")
  const [mainImage, setMainImage] = useState<string>("") // Re-introducing mainImage state
  const { id } = useParams()

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/product/getproducts?referenceWebsite=${referenceWebsite}`)
        const data = await res.json()
        if (Array.isArray(data.products)) {
          setAllProducts(data.products)
          const matched = data.products.find((item: Product) => item._id === id)
          setProduct(matched || null)
          if (matched && matched.images && matched.images.length > 0) {
            setMainImage(matched.images[0])
          } else {
            setMainImage("/placeholder.svg?height=600&width=600")
          }
        }
      } catch (err) {
        console.error("Error loading product:", err)
        setProduct(null)
        setMainImage("/placeholder.svg?height=600&width=600")
      }
    }
    fetchProducts()
  }, [id, baseUrl, referenceWebsite])

  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => quantity > 1 && setQuantity((prev) => prev - 1)

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity,
      })
    }
  }

  const handleBuyNow = () => {
    if (product) {

      addToCart({
        id: product._id,
        name: product.productName,
        image: product.images?.[0] || "",
        category: product.category?.name || "Uncategorized",
        price: product.actualPrice || product.price,
        quantity,
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"}`}
      />
    ))
  }

  let relatedProductsFiltered = allProducts.filter((p) => p._id !== id && p.category?._id === product?.category?._id)
  if (relatedProductsFiltered.length < 4) {
    const otherProducts = allProducts.filter(
      (p) => p._id !== id && !relatedProductsFiltered.some((rp) => rp._id === p._id),
    )
    relatedProductsFiltered = [...relatedProductsFiltered, ...otherProducts].slice(0, 4)
  }

  const dummyReviews = [
    {
      id: 1,
      author: "Priya Sharma",
      rating: 5,
      comment:
        "Absolutely stunning saree! The fabric is so soft and the colors are vibrant. Received many compliments.",
      date: "July 15, 2024",
    },
    {
      id: 2,
      author: "Rahul Singh",
      rating: 4,
      comment: "Good quality product. The delivery was quick, and it looks just like the picture. Highly recommend!",
      date: "July 10, 2024",
    },
    {
      id: 3,
      author: "Anjali Devi",
      rating: 5,
      comment: "Exceeded my expectations! The craftsmanship is superb. Will definitely buy from here again.",
      date: "July 01, 2024",
    },
  ]

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-2xl font-semibold text-gray-700">
        Loading product details...
      </div>
    )

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col items-center">
          <div
            className="relative w-full max-w-xl rounded-3xl overflow-hidden  border-4 border-transparent transition-all duration-300 hover:border-purple-200"
            style={{ borderColor: "rgba(157, 48, 137, 0.1)" }}
          >
            <img
              src={mainImage || "/placeholder.svg?height=600&width=600&query=main product image"}
              alt={product.productName}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex mt-6 space-x-4">
            {product.images.map((img: string, index: number) => (
              <img
                key={index}
                src={img || "/placeholder.svg?height=100&width=100&query=product thumbnail"}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 transform hover:scale-105 ${mainImage === img ? "border-purple-600 shadow-lg" : "border-gray-200 hover:border-purple-300"
                  }`}
                onClick={() => setMainImage(img)}
              />
            ))}

            {product.images.length === 0 && (
              <>
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Thumbnail 2"
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 transform hover:scale-105 border-gray-200 hover:border-purple-300"
                  onClick={() => setMainImage("/placeholder.svg?height=600&width=600")}
                />
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Thumbnail 3"
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 transform hover:scale-105 border-gray-200 hover:border-purple-300"
                  onClick={() => setMainImage("/placeholder.svg?height=600&width=600")}
                />
              </>
            )}
            {product.images.length === 1 && (
              <>
                <img
                  src={product.images[0] || "/placeholder.svg?height=100&width=100&query=product thumbnail 2"}
                  alt="Thumbnail 2"
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 transform hover:scale-105 border-gray-200 hover:border-purple-300"
                  onClick={() => setMainImage(product.images[0] || "/placeholder.svg?height=600&width=600")}
                />
                <img
                  src={product.images[0] || "/placeholder.svg?height=100&width=100&query=product thumbnail 3"}
                  alt="Thumbnail 3"
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 transform hover:scale-105 border-gray-200 hover:border-purple-300"
                  onClick={() => setMainImage(product.images[0] || "/placeholder.svg?height=600&width=600")}
                />
              </>
            )}
            {product.images.length === 2 && (
              <img
                src={product.images[0] || "/placeholder.svg?height=100&width=100&query=product thumbnail 3"}
                alt="Thumbnail 3"
                className="w-24 h-24 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 transform hover:scale-105 border-gray-200 hover:border-purple-300"
                onClick={() => setMainImage(product.images[0] || "/placeholder.svg?height=600&width=600")}
              />
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-2">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#1B2E4F" }}>
            {product.productName}
          </h1>
          <p className="text-gray-700 text-xl mb-6 leading-relaxed">{product.description}</p>

          <div className="flex items-center mb-5">
            <div className="flex mr-3">{renderStars(product.rating || 4)}</div>
            <span className="text-base text-gray-600">(Reviews)</span>
          </div>

          <div className="flex items-baseline mb-8">
            <span className="text-5xl font-bold mr-4" style={{ color: "rgb(157 48 137)" }}>
              ₹{product.actualPrice}
            </span>
            {product.price && product.price !== product.actualPrice && (
              <span className="text-2xl text-gray-500 line-through">₹{product.price}</span>
            )}
            {product.discount && (
              <span
                className="ml-6 px-4 py-2 rounded-full text-lg font-semibold text-white shadow-md"
                style={{ background: "rgb(157 48 137)" }}
              >
                {product.discount}% OFF
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-gray-800 text-lg mb-8">
            <div>
              <span className="font-semibold">Size:</span>{" "}
              <span className="text-gray-700">{product.size || "Standard"}</span>
            </div>
            <div>
              <span className="font-semibold">Category:</span>{" "}
              <span className="text-gray-700">{product.category?.name || "Uncategorized"}</span>
            </div>
            <div>
              <span className="font-semibold">Material:</span> <span className="text-gray-700">Premium Silk Blend</span>
            </div>
            <div>
              <span className="font-semibold">Availability:</span>{" "}
              <span className="text-green-600 font-medium">In Stock</span>
            </div>
          </div>

          <div className="flex items-center mb-10">
            <span className="mr-6 text-gray-800 font-semibold text-lg">Quantity:</span>
            <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden shadow-sm">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-base font-semibold" // Smaller buttons
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 py-1 text-base font-semibold text-gray-900">{quantity}</span> {/* Smaller font */}
              <button
                onClick={handleIncrease}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-base font-semibold" // Smaller buttons
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {" "}
            {/* Reduced gap */}
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-sm" // Smaller buttons
              style={{ background: "rgb(157 48 137)" }}
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-900 hover:shadow-xl hover:scale-[1.02] text-sm" // Smaller buttons
            >
              Buy Now
            </button>
            <button
              className="flex items-center justify-center gap-2 px-5 py-3 border-2 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-sm" // Smaller buttons
              style={{ borderColor: "rgb(157 48 137)", color: "rgb(157 48 137)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgb(157 48 137)"
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "rgb(157 48 137)"
              }}
            >
              <Heart size={20} /> Add to Wishlist
            </button>
          </div>

          {/* Share Options */}
          <div className="flex items-center gap-4 text-gray-600 text-xl">
            <span className="font-semibold text-lg text-gray-800">Share:</span>
            <a href="#" aria-label="Share on Facebook" className="hover:text-purple-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Share on Twitter" className="hover:text-purple-600 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Share on Pinterest" className="hover:text-purple-600 transition-colors">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="Share on LinkedIn" className="hover:text-purple-600 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Share on WhatsApp" className="hover:text-purple-600 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Share via Email" className="hover:text-purple-600 transition-colors">
              <FaEnvelope />
            </a>
            <button aria-label="Copy link" className="hover:text-purple-600 transition-colors">
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-20 p-10 rounded-3xl border-2 border-gray-100">
        <div className="flex border-b-2 border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-10 py-4 text-xl font-bold transition-all duration-300 ${activeTab === "description"
                ? "border-b-4 border-purple-600 text-purple-800"
                : "text-gray-700 hover:text-purple-600"
              }`}
            style={{ borderColor: activeTab === "description" ? "rgb(157 48 137)" : "" }}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-10 py-4 text-xl font-bold transition-all duration-300 ${activeTab === "reviews"
                ? "border-b-4 border-purple-600 text-purple-800"
                : "text-gray-700 hover:text-purple-600"
              }`}
            style={{ borderColor: activeTab === "reviews" ? "rgb(157 48 137)" : "" }}
          >
            Reviews
          </button>
        </div>
        <div className="py-8 text-gray-700 text-lg leading-relaxed">
          {activeTab === "description" ? (
            <div>
              <h3 className="text-2xl font-bold mb-5" style={{ color: "#1B2E4F" }}>
                Product Overview
              </h3>
              <p className="mb-5">{product.description}</p>
              <p className="mb-5">
                This exquisite piece is crafted with the finest traditional techniques, ensuring both authenticity and
                durability. Perfect for special occasions, it embodies the rich cultural heritage of our artisans.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Handwoven with premium threads</li>
                <li>Intricate traditional patterns</li>
                <li>Comfortable and breathable fabric</li>
                <li>Ideal for festive wear and celebrations</li>
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-5" style={{ color: "#1B2E4F" }}>
                Customer Reviews
              </h3>
              {dummyReviews.length > 0 ? (
                <div className="space-y-8">
                  {dummyReviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-gray-900 mr-3">{review.author}</span>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{review.date}</p>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700">No reviews yet. Be the first to share your experience!</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {/* <div className="mt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color: "#1B2E4F" }}>
            You Might Also <span style={{ color: "rgb(157 48 137)" }}>Like</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore other handcrafted treasures from our authentic collection, curated just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProducts.map((relProd) => (
            <Link key={relProd._id} to={`/product/${relProd._id}`} className="group block">
              <div
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(157, 48, 137, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
              >
            
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relProd.images?.[0] || "/placeholder.svg?height=200&width=300&query=related product"}
                    alt={relProd.productName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                 
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300"
                      style={{ background: "rgb(157 48 137)" }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-1" style={{ color: "#1B2E4F" }}>
                    {relProd.productName}
                  </h3>
                  <p className="text-base text-gray-600 mb-4">{relProd.category?.name || "Traditional Wear"}</p>
                  <div className="flex items-center text-base font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-2xl font-bold" style={{ color: "rgb(157 48 137)" }}>
                      ₹{relProd.actualPrice}
                    </span>
                    {relProd.price && relProd.price !== relProd.actualPrice && (
                      <span className="ml-3 text-base text-gray-400 line-through">₹{relProd.price}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

    
      </div> */}
      <Arrivals addToCart={function (): void {
        throw new Error("Function not implemented.")
      } } />
    </div>
  )
}

export default ProductDetails
