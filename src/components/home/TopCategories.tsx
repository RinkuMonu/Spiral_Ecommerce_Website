
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";

// // Static icons
// import suit from "../../assest/suit.png";
// import saree from "../../assest/saree.png";
// import fabric from "../../assest/fabric.png";

// // Mapping for icons and styles by name
// const iconMap: Record<string, any> = {
//   Suits: suit,
//   Sarees: saree,
//   Fabrics: fabric,
// };

// const styleMap: Record<string, any> = {
//   Suits: {
//     color: "from-blue-500 to-indigo-600",
//     bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
//     hoverColor: "hover:shadow-xl hover:shadow-blue-100/50",
//     textColor: "text-blue-600",
//     count: "320+ Products",
//   },
//   Sarees: {
//     color: "from-rose-500 to-pink-600",
//     bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
//     hoverColor: "hover:shadow-xl hover:shadow-rose-100/50",
//     textColor: "text-rose-600",
//     count: "450+ Products",
//   },
//   Fabrics: {
//     color: "from-amber-500 to-orange-500",
//     bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
//     hoverColor: "hover:shadow-xl hover:shadow-amber-100/50",
//     textColor: "text-amber-600",
//     count: "180+ Products",
//   },
// };

// export default function TopCategories() {
//   const [categories, setCategories] = useState<any[]>([]);

// const baseUrl = import.meta.env.VITE_API_BASE_URL;


//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/categories`);
//         const data = await res.json();
//         if (Array.isArray(data)) {
//           setCategories(data);
//         } else {
//           console.error("Unexpected API response:", data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="py-10 bg-gradient-to-b from-white to-gray-50 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="max-w-3xl mx-auto text-center mb-20">
//           <div className="inline-flex items-center justify-center mb-5">
//             <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full inline-flex items-center shadow-sm border border-indigo-100">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Exclusive Collections
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               PREMIUM
//             </span>{" "}
//             CATEGORIES
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
//             Handpicked collections showcasing the finest craftsmanship and
//             materials
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {categories.map((category) => {
//             const name = category.name;
//             const styles = styleMap[name] || {};
//             const icon = iconMap[name] || "";

//             return (
//               <div key={category._id} className="group relative">
//                 <Link
//                   to={`/category/${name.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="block h-full"
//                 >
//                   <div
//                     className={`h-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 overflow-hidden group-hover:border-transparent ${styles.hoverColor}`}
//                   >
//                     {/* Floating icon */}
//                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                       <div
//                         className={`w-20 h-20 rounded-full flex items-center justify-center ${styles.bgColor} shadow-lg border-4 border-white transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl`}
//                       >
//                         <img
//                           src={icon}
//                           alt={name}
//                           className="h-10 w-10 object-contain filter brightness-0 invert"
//                         />
//                       </div>
//                     </div>

//                     <div className="pt-16 pb-8 px-8 flex flex-col items-center">
//                       <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
//                         {name}
//                       </h3>
//                       {/* ✅ Show description */}
//                       {/* <p className="text-gray-600 text-center mb-3 text-sm">
//                         {category.description}
//                       </p>
//                       <p className="text-gray-500 mb-8 font-medium">
//                         {styles.count || "Products"}
//                       </p> */}

//                       <div className="w-16 h-1 bg-gradient-to-r from-gray-200 to-gray-200 via-gray-400 rounded-full mb-8"></div>

//                       {/* <div className="mt-auto w-full">
//                         <div className="flex items-center justify-center w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 group-hover:bg-gray-50 group-hover:border-gray-300 transition-all duration-300">
//                           <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
//                             Explore Collection
//                           </span>
//                           <ArrowRight className="ml-3 h-4 w-4 text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
//                         </div>
//                       </div> */}
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";

// // Static icons
// import suit from "../../assest/suit.png";
// import saree from "../../assest/saree.png";
// import fabric from "../../assest/fabric.png";

// // Mapping for icons and styles by name
// const iconMap: Record<string, any> = {
//   Suits: suit,
//   Sarees: saree,
//   Fabrics: fabric,
// };

// const styleMap: Record<string, any> = {
//   Suits: {
//     color: "from-blue-500 to-indigo-600",
//     bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
//     hoverColor: "hover:shadow-xl hover:shadow-blue-100/50",
//     textColor: "text-blue-600",
//     count: "320+ Products",
//   },
//   Sarees: {
//     color: "from-rose-500 to-pink-600",
//     bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
//     hoverColor: "hover:shadow-xl hover:shadow-rose-100/50",
//     textColor: "text-rose-600",
//     count: "450+ Products",
//   },
//   Fabrics: {
//     color: "from-amber-500 to-orange-500",
//     bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
//     hoverColor: "hover:shadow-xl hover:shadow-amber-100/50",
//     textColor: "text-amber-600",
//     count: "180+ Products",
//   },
// };

// export default function TopCategories() {
//   const [categories, setCategories] = useState<string[]>([]);

//   const baseUrl = import.meta.env.VITE_API_BASE_URL;
//   const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE;

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/website/${referenceWebsite}`);
//         const data = await res.json();

//         if (Array.isArray(data.website?.categories)) {
//           const categoryNames = data.website.categories.map((cat: any) => cat.name);
//           setCategories(categoryNames);
//         } else {
//           console.warn("Categories not found in response:", data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="py-10 bg-gradient-to-b from-white to-gray-50 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="max-w-3xl mx-auto text-center mb-20">
//           <div className="inline-flex items-center justify-center mb-5">
//             <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full inline-flex items-center shadow-sm border border-indigo-100">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Exclusive Collections
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               PREMIUM
//             </span>{" "}
//             CATEGORIES
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
//             Handpicked collections showcasing the finest craftsmanship and
//             materials
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {categories.map((name) => {
//             const styles = styleMap[name] || {};
//             const icon = iconMap[name] || "";

//             return (
//               <div key={name} className="group relative">
//                 <Link
//                   to={`/category/${name.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="block h-full"
//                 >
//                   <div
//                     className={`h-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 overflow-hidden group-hover:border-transparent ${styles.hoverColor}`}
//                   >
//                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                       <div
//                         className={`w-20 h-20 rounded-full flex items-center justify-center ${styles.bgColor} shadow-lg border-4 border-white transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl`}
//                       >
//                         <img
//                           src={icon}
//                           alt={name}
//                           className="h-10 w-10 object-contain filter brightness-0 invert"
//                         />
//                       </div>
//                     </div>

//                     <div className="pt-16 pb-8 px-8 flex flex-col items-center">
//                       <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
//                         {name}
//                       </h3>

//                       <div className="w-16 h-1 bg-gradient-to-r from-gray-200 to-gray-200 via-gray-400 rounded-full mb-8"></div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";

// const styleMap: Record<string, any> = {
//   "Kalmkari Print Fabric": {
//     color: "from-indigo-500 to-violet-600",
//     bgColor: "bg-gradient-to-br from-indigo-100 to-violet-500",
//     hoverColor: "hover:shadow-xl hover:shadow-indigo-100/50",
//     textColor: "text-indigo-600",
//     count: "320+ Products",
//   },
//   "Cotton mal mal saree": {
//     color: "from-pink-500 to-fuchsia-600",
//     bgColor: "bg-gradient-to-br from-pink-100 to-fuchsia-500",
//     hoverColor: "hover:shadow-xl hover:shadow-pink-100/50",
//     textColor: "text-pink-600",
//     count: "450+ Products",
//   },
//   "Chanderi Silk saree": {
//     color: "from-orange-400 to-amber-500",
//     bgColor: "bg-gradient-to-br from-orange-100 to-amber-500",
//     hoverColor: "hover:shadow-xl hover:shadow-orange-100/50",
//     textColor: "text-orange-500",
//     count: "180+ Products",
//   },
//   "Maheswari Silk saree": {
//     color: "from-cyan-500 to-teal-600",
//     bgColor: "bg-gradient-to-br from-cyan-100 to-teal-500",
//     hoverColor: "hover:shadow-xl hover:shadow-cyan-100/50",
//     textColor: "text-cyan-600",
//     count: "210+ Products",
//   },
//   "Kota Doriya Saree": {
//     color: "from-purple-500 to-rose-500",
//     bgColor: "bg-gradient-to-br from-purple-100 to-rose-500",
//     hoverColor: "hover:shadow-xl hover:shadow-purple-100/50",
//     textColor: "text-purple-600",
//     count: "380+ Products",
//   },
//   "Cotton Suit": {
//     color: "from-green-500 to-emerald-600",
//     bgColor: "bg-gradient-to-br from-green-100 to-emerald-500",
//     hoverColor: "hover:shadow-xl hover:shadow-green-100/50",
//     textColor: "text-green-600",
//     count: "150+ Products",
//   },
//   "Sanganeri Print Fabric": {
//     color: "from-yellow-400 to-yellow-600",
//     bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-500",
//     hoverColor: "hover:shadow-xl hover:shadow-yellow-100/50",
//     textColor: "text-yellow-600",
//     count: "160+ Products",
//   },
//   "Dabu Print Fabric": {
//     color: "from-red-400 to-red-600",
//     bgColor: "bg-gradient-to-br from-red-100 to-red-500",
//     hoverColor: "hover:shadow-xl hover:shadow-red-100/50",
//     textColor: "text-red-600",
//     count: "140+ Products",
//   },
//   "Bagru Print": {
//     color: "from-emerald-400 to-lime-500",
//     bgColor: "bg-gradient-to-br from-emerald-100 to-lime-500",
//     hoverColor: "hover:shadow-xl hover:shadow-lime-100/50",
//     textColor: "text-emerald-600",
//     count: "130+ Products",
//   },
//   "Cotton Suit In Kota": {
//     color: "from-sky-400 to-blue-500",
//     bgColor: "bg-gradient-to-br from-sky-100 to-blue-500",
//     hoverColor: "hover:shadow-xl hover:shadow-sky-100/50",
//     textColor: "text-sky-600",
//     count: "170+ Products",
//   },
//   "Chanderi Silk Suits": {
//     color: "from-rose-400 to-amber-400",
//     bgColor: "bg-gradient-to-br from-rose-100 to-amber-500",
//     hoverColor: "hover:shadow-xl hover:shadow-rose-100/50",
//     textColor: "text-rose-500",
//     count: "190+ Products",
//   },
// };


// export default function TopCategories() {
//   const [categories, setCategories] = useState<string[]>([]);

//   const baseUrl = import.meta.env.VITE_API_BASE_URL;
//   const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE;

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/website/${referenceWebsite}`);
//         const data = await res.json();

//         if (Array.isArray(data.website?.categories)) {
//           const categoryNames = data.website.categories.map((cat: any) => cat.name);
//           setCategories(categoryNames);
//         } else {
//           console.warn("Categories not found in response:", data);
//           // Fallback to default categories if API fails
//           setCategories(["Suits", "Sarees", "Fabrics", "Men's Wear", "Women's Wear", "Accessories"]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//         // Fallback to default categories on error
//         setCategories(["Suits", "Sarees", "Fabrics", "Men's Wear", "Women's Wear", "Accessories"]);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-gray-50 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center justify-center mb-5">
//             <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full inline-flex items-center shadow-sm border border-indigo-100">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Exclusive Collections
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               PREMIUM
//             </span>{" "}
//             CATEGORIES
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Handpicked collections showcasing the finest craftsmanship and materials
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {categories.map((name) => {
//             const styles = styleMap[name] || {
//               color: "from-indigo-500 to-purple-600",
//               bgColor: "bg-gradient-to-br from-purple-700 to-purple-300",
//               hoverColor: "hover:shadow-xl hover:shadow-indigo-100/50",
//               textColor: "text-indigo-600",
//               count: "100+ Products",
//             };

//             return (
//               <div key={name} className="group relative">
//                 <Link
//                   to={`/category/${name.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="block h-full"
//                 >
//                   <div
//                     className={`h-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 overflow-hidden group-hover:border-transparent ${styles.hoverColor}`}
//                   >
//                     {/* Gradient Header */}
//                     <div className={`${styles.bgColor} h-32 relative overflow-hidden`}>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <h3 className="text-2xl font-bold text-white text-center px-4">
//                           {name}
//                         </h3>
//                       </div>
                      
//                       {/* Floating Product Count */}
//                       <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
//                         <span className="text-sm font-medium text-white">
//                           {styles.count}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-8 flex flex-col">
//                       <div className="mb-6">
//                         <div className="h-1 w-16 bg-gradient-to-r from-gray-200 to-gray-200 via-gray-400 rounded-full mb-4"></div>
//                         <p className="text-gray-600 mb-6 line-clamp-3">
//                           Discover our exclusive collection of premium {name.toLowerCase()} crafted with attention to detail and quality materials.
//                         </p>
//                       </div>
                      
//                       <div className="mt-auto">
//                         <div className="inline-flex items-center font-medium group-hover:translate-x-1 transition-transform duration-300">
//                           <span className={`${styles.textColor}`}>Explore Collection</span>
//                           <ArrowRight className="ml-2 h-4 w-4" />
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Hover Effect Bar */}
//                     <div 
//                       className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${styles.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                     ></div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>

      
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const styleMap: Record<string, any> = {
  "Kalmkari Print Fabric": {
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-indigo-100 to-violet-500",
    textColor: "text-indigo-600",
    count: "320+ Products",
  },
  "Cotton mal mal saree": {
    color: "from-pink-500 to-fuchsia-600",
    bgColor: "bg-gradient-to-br from-pink-100 to-fuchsia-500",
    textColor: "text-pink-600",
    count: "450+ Products",
  },
  "Chanderi Silk saree": {
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-100 to-amber-500",
    textColor: "text-orange-500",
    count: "180+ Products",
  },
  "Maheswari Silk saree": {
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-cyan-100 to-teal-500",
    textColor: "text-cyan-600",
    count: "210+ Products",
  },
  "Kota Doriya Saree": {
    color: "from-purple-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-purple-100 to-rose-500",
    textColor: "text-purple-600",
    count: "380+ Products",
  },
  "Cotton Suit": {
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-500",
    textColor: "text-green-600",
    count: "150+ Products",
  },
  "Sanganeri Print Fabric": {
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-500",
    textColor: "text-yellow-600",
    count: "160+ Products",
  },
  "Dabu Print Fabric": {
    color: "from-red-400 to-red-600",
    bgColor: "bg-gradient-to-br from-red-100 to-red-500",
    textColor: "text-red-600",
    count: "140+ Products",
  },
  "Bagru Print": {
    color: "from-emerald-400 to-lime-500",
    bgColor: "bg-gradient-to-br from-emerald-100 to-lime-500",
    textColor: "text-emerald-600",
    count: "130+ Products",
  },
  "Cotton Suit In Kota": {
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-gradient-to-br from-sky-100 to-blue-500",
    textColor: "text-sky-600",
    count: "170+ Products",
  },
  "Chanderi Silk Suits": {
    color: "from-rose-400 to-amber-400",
    bgColor: "bg-gradient-to-br from-rose-100 to-amber-500",
    textColor: "text-rose-500",
    count: "190+ Products",
  },
};

export default function TopCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/website/${referenceWebsite}`);
        const data = await res.json();

        if (Array.isArray(data.website?.categories)) {
          const categoryNames = data.website.categories.map((cat: any) => cat.name);
          setCategories(categoryNames);
        } else {
          console.warn("Categories not found in response:", data);
          setCategories(["Suits", "Sarees", "Fabrics", "Men's Wear", "Women's Wear", "Accessories"]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories(["Suits", "Sarees", "Fabrics", "Men's Wear", "Women's Wear", "Accessories"]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center mb-5">
            <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Exclusive Collections
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PREMIUM
            </span>{" "}
            CATEGORIES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked collections showcasing the finest craftsmanship and materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {categories.map((name, index) => {
            const styles = styleMap[name] || {
              color: "from-indigo-500 to-purple-600",
              bgColor: "bg-gradient-to-br from-purple-700 to-purple-300",
              textColor: "text-indigo-600",
              count: "100+ Products",
            };

            // Make the first card span two columns
            const isFirstCard = index === 0;
            
            return (
              <div 
                key={name} 
                className={`group relative ${isFirstCard ? 'md:col-span-2' : ''}`}
              >
                <Link
                  to={`/category/${name.toLowerCase()}`}
                  className="block h-full"
                >
                  <div className={`h-full flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:-translate-y-1 ${isFirstCard ? 'min-h-[300px]' : ''}`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 ${styles.bgColor} opacity-20 z-0`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      {/* Category Name */}
                      <h3 className={`text-2xl font-bold ${styles.textColor} mb-2 ${isFirstCard ? 'text-3xl' : ''}`}>
                        {name}
                      </h3>
                      
                      {/* Product Count */}
                      <span className={`text-sm font-medium ${styles.textColor} bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 inline-block self-start mb-4`}>
                        {styles.count}
                      </span>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                        Discover our exclusive collection of premium {name.toLowerCase()} crafted with attention to detail and quality materials.
                      </p>
                      
                      {/* Explore Button */}
                      <div className="mt-auto">
                        <div className="inline-flex items-center font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                          <span>Explore Collection</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Bar */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${styles.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    
                    {/* Decorative Pattern */}
                    {/* <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                      <div className={`w-full h-full ${styles.bgColor} rounded-full`}></div>
                    </div> */}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

  
      </div>
    </section>
  );
}