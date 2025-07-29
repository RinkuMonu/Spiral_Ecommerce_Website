"use client";
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
    link: "/products",
    buttonText: "Explore Collection",
  },
  {
    image: jajam2,
    link: "/products",
    buttonText: "View Collection",
  },
  {
    image: jajam3,
    link: "/products",
    buttonText: "Shop Now",
  },
  {
    image: jajam4,
    link: "/products",
    buttonText: "Discover Now",
  },
];

const Banner: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto"
        >
          {bannerData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-auto">
                {/* Background Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.buttonText}
                  className="w-full h-auto object-fill"
                  loading="eager"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-center z-20 px-4 sm:px-6 lg:px-16 sm:mt-64">
                  <div className="w-full max-w-3xl space-y-4 sm:space-y-6]">
                    {/* Badge */}
                    {/* <div>
                      <span className="inline-block px-2 py-1 sm:px-6 sm:py-2 text-xs sm:text-sm font-semibold border-2 border-white/30 backdrop-blur-sm rounded-full bg-white/20">
                        ✨ {item.buttonText} ✨
                      </span>
                    </div> */}

                    {/* CTA Buttons */}
                    <div className="hidden sm:flex flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
                      {/* Primary Button */}
                      <a
                        href={item.link}
                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 py-1 px-4 sm:py-2 sm:px-6 sm:text-base text-xs font-bold bg-white text-black rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgb(157 48 137)";
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "white";
                          e.currentTarget.style.color = "black";
                        }}
                      >
                        <span>{item.buttonText}</span>
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </a>

                      {/* Secondary Button */}
                      <a
                        href="/products"
                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 py-1 px-4 sm:py-2 sm:px-6 text-sm sm:text-base font-bold rounded-full transition-all duration-300 border-2 border-white/50 backdrop-blur-sm hover:bg-white/20 bg-white/10 text-white"
                      >
                        <span>View All Products</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev hidden sm:flex" />
          <div className="swiper-button-next hidden sm:flex" />
        </Swiper>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 20px !important;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.4);
            border: 2px solid rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            margin: 0 6px;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            width: 30px;
            background: white;
            border-radius: 7px;
            border-color: white;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
            background: rgba(157, 48, 137, 0.8);
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(15px);
            transition: all 0.3s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgb(157, 48, 137);
            border-color: white;
            transform: scale(1.1);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
            color: white;
            font-weight: bold;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Banner;
