// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import sl3 from "../../assest/sl-3.png";
// import sl4 from "../../assest/sl-4.png";
// import sl5 from "../../assest/sl-5.png";
// import { MoveRight } from "lucide-react";

// const Banner: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#5252a2] to-[#5252a2]">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         autoplay={{
//           delay: 3000, // Adjusted autoplay delay for better pace
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Navigation, Autoplay]}
//         className="mySwiper w-full bg-gradient-to-r from-[#5252a2] to-[#5252a2]"
//       >

//         <SwiperSlide>
//           <div className="  w-full h-full ">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full h-full">
//               {/* Left Section */}
//               <div className="flex flex-col justify-center space-y-4  px-8 md:px-12 lg:px-20 text-white">
//               <span className="text-sm text-primary font-medium">Save Big on Top-Selling Gadgets</span>
//               <h3 className="text-4xl lg:text-5xl font-bold  mb-4">Unbeatable Tech Deals</h3>
//                 <p className="text-base lg:text-lg leading-relaxed">
//                   Huge discounts on smartphones, laptops, and more. Limited-time
//                   offers—shop now!
//                 </p>
//                 <div className="w-fit rounded-lg bg-white text-black">
//                   <a
//                     href="/products"
//                     className=" flex items-center justify-center gap-2 py-3 px-4  text-base font-medium hover:bg-primary-dark transition"
//                   >
//                     <div>Shop Now</div>
//                      <MoveRight size={20} />
//                   </a>
//                 </div>
//               </div>

//               {/* Right Section */}
//               <div className="flex justify-center items-center">
//                 <img
//                   src={sl3}
//                   alt="slider image"
//                   className="object-cover w-full max-w-md h-auto rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className=" w-full h-full">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full h-full">
//               {/* Left Section */}
//               <div className="flex flex-col justify-center space-y-4  px-8 md:px-12 lg:px-20 text-white">
//                 <span className="text-sm text-primary font-medium">Fresh Gadgets, Latest Innovations</span>
//                 <h3 className="text-4xl lg:text-5xl font-bold  mb-4">New Arrivals: Cutting-Edge Tech</h3>
//                 <p className=" text-xl lg:text-2xl leading-relaxed">
//                   Explore the latest in tech— from smartwatches to home automation. Shop new arrivals now!
//                 </p>
//                 <div className="w-fit rounded-lg bg-white text-black">
//                   <a
//                     href="/products"
//                     className=" flex items-center justify-center gap-2 py-3 px-4  text-base font-medium hover:bg-primary-dark transition"
//                   >
//                     <div>Shop Now</div>
//                      <MoveRight size={20} />
//                   </a>
//                 </div>
//               </div>

//               {/* Right Section */}
//               <div className="flex justify-center items-center">
//                 <img
//                   src={sl4}
//                   alt="slider image"
//                   className="object-cover w-full max-w-md h-auto rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="w-full h-full">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  mb-6 w-full h-full">
//               {/* Left Section */}
//               <div className="flex flex-col justify-center space-y-4 px-8 md:px-12 lg:px-20 text-white">
//                 <span className="text-sm text-primary font-medium">Trusted by Thousands of Happy Customers</span>
//                 <h3 className="text-4xl lg:text-5xl font-bold mb-4">Shop Best-Selling Electronics</h3>
//                 <p className=" text-base lg:text-lg leading-relaxed">
//                   Shop our most popular electronics and see why customers love them!
//                 </p>
//                 <div className="w-fit rounded-lg bg-white text-black">
//                   <a
//                     href="/products"
//                     className=" flex items-center justify-center gap-2 py-3 px-4  text-base font-medium hover:bg-primary-dark transition"
//                   >
//                     <div>Shop Now</div>
//                      <MoveRight size={20} />
//                   </a>
//                 </div>
//               </div>

//               {/* Right Section */}
//               <div className="flex justify-center items-center">
//                 <img
//                   src={sl5}
//                   alt="slider image"
//                   className="object-cover w-full max-w-md h-auto rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;


//=====================================================================================



// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { ArrowRight } from "lucide-react";

// // Import your images
// import jajam1 from "../../assest/jajam1.jpg";
// import jajam2 from "../../assest/jajam2.jpg";
// import jajam3 from "../../assest/jajam3.jpg";
// import jajam4 from "../../assest/jajam4.jpg";

// const bannerData = [
//   {
//     image: jajam1,
//     link: "/category/jajam1",
//     buttonText: "Explore Collection",
//     overlay: "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), transparent)"
//   },
//   {
//     image: jajam2,
//     link: "/category/jajam2",
//     buttonText: "View Offers",
//     overlay: "linear-gradient(to bottom, rgba(120, 53, 15, 0.7), transparent)"
//   },
//   {
//     image: jajam3,
//     link: "/category/jajam3",
//     buttonText: "Shop Now",
//     overlay: "linear-gradient(to bottom, rgba(2, 44, 34, 0.7), transparent)"
//   },
//   {
//     image: jajam4,
//     link: "/category/jajam4",
//     buttonText: "Discover Now",
//     overlay: "linear-gradient(to bottom, rgba(136, 19, 55, 0.7), transparent)"
//   },
// ];

// const Banner: React.FC = () => {
//   const progressRef = useRef<HTMLDivElement>(null);

//   // Handle progress bar animation
//   useEffect(() => {
//     if (!progressRef.current) return;

//     const animateProgressBar = () => {
//       if (progressRef.current) {
//         progressRef.current.style.transition = "none";
//         progressRef.current.style.width = "0";

//         // Trigger reflow
//         void progressRef.current.offsetWidth;

//         progressRef.current.style.transition = "width 6s linear";
//         progressRef.current.style.width = "100%";
//       }
//     };

//     // Initial animation
//     animateProgressBar();

//     // Animate every 6 seconds to match slide duration
//     const interval = setInterval(animateProgressBar, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group" 
//          style={{
//            borderRadius: "16px",
//            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//          }}>
//       <Swiper
//         modules={[EffectFade, Autoplay, Pagination]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1500}
//         autoplay={{
//           delay: 6000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             return `<span class="${className}" style="
//               width: 8px;
//               height: 8px;
//               background: rgba(255,255,255,0.5);
//               border-radius: 50%;
//               cursor: pointer;
//               transition: all 0.3s ease;
//               margin: 0 4px;
//             "></span>`;
//           },
//         }}
//         loop={true}
//         className="h-[70vh] w-full"
//         onSlideChange={() => {
//           if (progressRef.current) {
//             progressRef.current.style.transition = "none";
//             progressRef.current.style.width = "0";

//             // Trigger reflow
//             void progressRef.current.offsetWidth;

//             progressRef.current.style.transition = "width 6s linear";
//             progressRef.current.style.width = "100%";
//           }
//         }}
//       >
//         {bannerData.map((item, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="relative w-full h-full">
//               {/* Background image with parallax effect */}
//               <div 
//                 className="absolute inset-0 overflow-hidden"
//                 style={{
//                   transform: "scale(1.1)",
//                   transition: "transform 0.8s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-full h-full object-cover"
//                   style={{
//                     transition: "transform 1.2s ease-out",
//                     transform: "scale(1.1)",
//                   }}
//                 />
//               </div>

//               {/* Gradient Overlay */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   background: item.overlay,
//                 }}
//               />

//               {/* Button */}
//               <div 
//                 className="absolute bottom-10 left-10 z-20"
//                 style={{
//                   transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
//                   opacity: 0,
//                   transform: "translateY(20px)",
//                   animation: "fadeInUp 0.8s forwards",
//                   animationDelay: "0.5s"
//                 }}
//               >
//                 <a
//                   href={item.link}
//                   className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full shadow-xl transition-all duration-300"
//                   style={{
//                     fontWeight: 500,
//                     letterSpacing: "0.5px",
//                     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//                   }}
//                 >
//                   <span className="tracking-wide">{item.buttonText}</span>
//                   <ArrowRight
//                     size={20}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Pagination container */}
//         <div 
//           className="swiper-pagination"
//           style={{
//             position: "absolute",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex",
//             justifyContent: "center",
//             zIndex: 20,
//           }}
//         />
//       </Swiper>

//       {/* Progress Bar Indicator */}
//       <div 
//         className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-20"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//       >
//         <div 
//           ref={progressRef}
//           className="h-full"
//           style={{
//             background: "linear-gradient(to right, #6366f1, #8b5cf6)",
//             width: "0%",
//           }}
//         />
//       </div>

//       {/* Inline CSS for animations and custom styles */}
//       <style>
//         {`
//           .swiper-pagination-bullet-active {
//             width: 24px !important;
//             background: white !important;
//             border-radius: 4px !important;
//           }

//           @keyframes fadeInUp {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .swiper-slide-active .swiper-slide-active img {
//             transform: scale(1) !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Banner;




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ArrowRight } from "lucide-react";

// Images
import jajam1 from "../../assest/jajam1.jpg";
import jajam2 from "../../assest/jajam2.jpg";
import jajam3 from "../../assest/jajam3.jpg";
import jajam4 from "../../assest/jajam4.jpg";

const bannerData = [
  {
    image: jajam1,
    link: "/category/sarees",
    buttonText: "Explore Collection",
    // overlay: "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), transparent)"
  },
  {
    image: jajam2,
    link: "/category/fabrics",
    buttonText: "View Offers",
    // overlay: "linear-gradient(to bottom, rgba(120, 53, 15, 0.7), transparent)"
  },
  {
    image: jajam3,
    link: "/category/sarees",
    buttonText: "Shop Now",
    // overlay: "linear-gradient(to bottom, rgba(2, 44, 34, 0.7), transparent)"
  },
  {
    image: jajam4,
    link: "/category/suits",
    buttonText: "Discover Now",
    // overlay: "linear-gradient(to bottom, rgba(136, 19, 55, 0.7), transparent)"
  },
];

const Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full md:h-[70vh]"
      >
        {bannerData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt=""
                className="w-full h-full rounded-xl"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{ background: item.overlay }}
              />

              {/* Button */}
              <div className="absolute bottom-10 left-10 z-20">
                <a
                  href={item.link}
                  className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg transition-all duration-300"
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            margin: 0 4px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            width: 24px !important;
            background: white !important;
            border-radius: 4px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
