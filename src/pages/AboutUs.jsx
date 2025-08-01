"use client";

import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#9d3089] mb-6">
          Our Story
        </h1>
        <div className="w-24 h-1.5 bg-[#9d3089] mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl">
          <img
            src="/about-us.jpg"
            alt="Artisan working on block printing"
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="text-sm font-medium">Master Artisan at Work</p>
            <p className="text-xs opacity-80">Traditional Bagru Block Printing</p>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl font-semibold text-[#9d3089]">
              JAJAM BLOCK PRINTS, established in 1750 in Jaipur, Rajasthan, has a rich legacy of handcrafted textile artistry.
            </p>
            
            <div className="space-y-6">
              <p>
                We specialize in Cotton Sarees, Dress Materials, Suits, Bedsheets, and Kurtis that beautifully blend tradition and trend.
              </p>
              
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#9d3089]">
                <p className="font-medium">
                  Our quality-focused approach begins with carefully selected fabrics and continues through stringent testing to ensure durability and comfort.
                </p>
                <p className="mt-2 text-sm">
                  Led by Mr. Sunil, Arun, and Ilu Chhipa, our team continues to innovate while preserving our heritage.
                </p>
              </div>
              
              <p>
                At our advanced facility, skilled professionals use traditional techniques and modern tools to create artful textiles. Every department works in harmony, allowing us to fulfill bulk and custom orders without delays.
              </p>
              
              <p>
                Our artisans practice the ancient hand block printing technique of Bagru, using eco-friendly vegetable dyes like indigo, turmeric, and madder root. Each print carries a deeper meaning—red for love, saffron for spiritual energy, indigo for divinity.
              </p>
              
              <p>
                We value client satisfaction above all. Our team listens carefully, responds quickly, and continuously improves based on feedback. With fair pricing and timeless designs, our goal is to offer more than products—we offer a piece of tradition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-20 bg-[#f9f4f8] rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-[#9d3089] mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Craft Specialties
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bagru Block Print
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Natural Dye Printing
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Handcrafted Textiles
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Eco-Friendly Printing
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Traditional Rajasthani Techniques
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#9d3089] mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Popular Products
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cotton Sarees
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Printed Suits
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bedsheets
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Block Printed Kurtis
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-[#9d3089]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Custom Fabric Orders
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from "react";

// export default function AboutUs() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
//       <h1 className="text-4xl font-extrabold text-[#9d3089] mb-10 text-center border-b pb-4 border-gray-300">
//         About Us
//       </h1>

//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         {/* Text Content */}
//         <div className="space-y-6 text-justify leading-relaxed">
//           <p>
//             <strong>JAJAM BLOCK PRINTS</strong>, established in 1750 in Jaipur,
//             Rajasthan, has a rich legacy of handcrafted textile artistry. We
//             specialize in Cotton Sarees, Dress Materials, Suits, Bedsheets, and
//             Kurtis that beautifully blend tradition and trend.
//           </p>
//           <p>
//             Our quality-focused approach begins with carefully selected fabrics
//             and continues through stringent testing to ensure durability and
//             comfort. Led by Mr. Sunil, Arun, and Ilu Chhipa, our team continues
//             to innovate while preserving our heritage.
//           </p>
//           <p>
//             At our advanced facility, skilled professionals use traditional
//             techniques and modern tools to create artful textiles. Every
//             department works in harmony, allowing us to fulfill bulk and custom
//             orders without delays.
//           </p>
//           <p>
//             Our artisans practice the ancient hand block printing technique of
//             Bagru, using eco-friendly vegetable dyes like indigo, turmeric, and
//             madder root. Each print carries a deeper meaning—red for love,
//             saffron for spiritual energy, indigo for divinity.
//           </p>
//           <p>
//             We value client satisfaction above all. Our team listens carefully,
//             responds quickly, and continuously improves based on feedback. With
//             fair pricing and timeless designs, our goal is to offer more than
//             products—we offer a piece of tradition.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
//           <img
//             src="/about-us.jpg"
//             alt="Artisan working on block printing"
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Footer Info */}
//       <div className="mt-12 text-sm text-gray-600 space-y-2 border-t border-gray-300 pt-6">
//         <p>
//           <strong>Craft Specialties:</strong>{" "}
//           <span className="text-gray-700">
//             Bagru Block Print | Natural Dye Printing | Handcrafted Textiles |
//             Eco-Friendly Printing | Traditional Rajasthani Techniques
//           </span>
//         </p>
//         <p>
//           <strong>Popular Products:</strong>{" "}
//           <span className="text-gray-700">
//             Cotton Sarees | Printed Suits | Bedsheets | Block Printed Kurtis |
//             Custom Fabric Orders
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }