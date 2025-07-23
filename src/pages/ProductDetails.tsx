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




import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../types";
import {  Heart, ShoppingCart } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaRegCopy,
} from "react-icons/fa";

interface ProductDetailsProps {
  addToCart: (product: Product) => void;
}

const ProductDetails = ({ addToCart }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const { id } = useParams();
  const navigate = useNavigate();


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
          setAllProducts(data.products);
          const matched = data.products.find((item: Product) => item._id === id);
          setProduct(matched || null);
        }
      } catch (err) {
        console.error("Error loading product:", err);
      }
    };

    fetchProducts();
  }, [id]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const handleBuyNow = () => {
    if (product) {
      // addToCart(product);
        addToCart({
    id: product._id, // ✔ correct id
    name: product.productName, // ✔ correct name
    image: product.images?.[0] || "", // ✔ correct image
    category: product.category?.name || "Uncategorized",
    price: product.actualPrice || product.price, // ✔ correct price
    quantity,
  });
    }
  };

  const relatedProducts = allProducts.filter((p) => p._id !== id && p.category._id === product?.category._id).slice(0, 4);

  if (!product) return <div className="text-center py-10 text-xl">Product not found...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product View Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={product.images[0]}
            alt={product.productName}
            className="rounded-xl object-cover w-full max-w-md shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.productName}</h1>
          <p className="text-gray-500 mb-4">{product.description}</p>

          <div className="text-2xl font-semibold text-indigo-600 mb-2">₹{product.actualPrice}</div>
          <div className="text-gray-500 line-through mb-2">₹{product.price}</div>
          <div className="text-green-600 font-medium mb-4">{product.discount}% off</div>

          <div className="text-sm text-gray-600 mb-2">Size: <strong>{product.size}</strong></div>
          <div className="text-sm text-gray-600 mb-6">Category: <strong>{product.category?.name}</strong></div>

          <div className="flex items-center mb-4">
            <span className="mr-3 text-gray-700">Quantity:</span>
            <button onClick={handleDecrease} className="px-3 py-1 border rounded-l">-</button>
            <span className="px-4 border-t border-b">{quantity}</span>
            <button onClick={handleIncrease} className="px-3 py-1 border rounded-r">+</button>
          </div>

          <div className="flex gap-3 mb-6">
            <button
              // onClick={() => addToCart(product)}
                onClick={handleBuyNow}
              className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Buy Now
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
              <Heart size={18} /> Wishlist
            </button>
          </div>

          {/* Share Options */}
          <div className="flex gap-4 text-gray-500">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaLinkedinIn />
            <FaWhatsapp />
            <FaEnvelope />
            <FaRegCopy />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2 ${activeTab === "description" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-600"}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-2 ${activeTab === "reviews" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-600"}`}
          >
            Reviews
          </button>
        </div>
        <div className="py-6 text-gray-700">
          {activeTab === "description" ? (
            <div>{product.description}</div>
          ) : (
            <div>No reviews yet. Be the first to write one!</div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((relProd) => (
            <div
              key={relProd._id}
              onClick={() => navigate(`/product/${relProd._id}`)}
              className="border rounded-lg p-4 hover:shadow-md cursor-pointer transition-all"
            >
              <img
                src={relProd.images[0]}
                alt={relProd.productName}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-medium text-gray-800 truncate">{relProd.productName}</h3>
              <div className="text-indigo-600 font-bold mt-1">₹{relProd.actualPrice}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

