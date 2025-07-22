"use client"
import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { ArrowRight } from "lucide-react"

// Images
import jajam1 from "../../assest/jajam1.jpg"
import jajam2 from "../../assest/jajam2.jpg"
import jajam3 from "../../assest/jajam3.jpg"
import jajam4 from "../../assest/jajam4.jpg"

const bannerData = [
  {
    image: jajam1,
    link: "/category/sarees",
    buttonText: "Explore Collection",
    
  },
  {
    image: jajam2,
    link: "/category/fabrics",
    buttonText: "View Collection",
   
  },
  {
    image: jajam3,
    link: "/category/sarees",
    buttonText: "Shop Now",
    
  },
  {
    image: jajam4,
    link: "/category/suits",
    buttonText: "Discover Now",
 
  },
]

const Banner: React.FC = () => {
  return (
    <section className="relative">
      {/* Full-width Banner Slider */}
      <div className="relative overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[85vh] md:h-[90vh]"
        >
          {bannerData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0" style={{ background: item.overlay }} />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-4xl mx-auto px-8 md:px-16 text-center text-white">
                    {/* Subtitle */}
                    <div className="mb-6">
                      <span
                        className="inline-block px-6 py-3 rounded-full text-sm font-semibold border-2 border-white/30 backdrop-blur-sm"
                        style={{ background: "rgba(255, 255, 255, 0.15)" }}
                      >
                        ✨ {item.subtitle} ✨
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{item.title}</h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                      {item.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <a
                        href={item.link}
                        className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgb(157 48 137)"
                          e.currentTarget.style.color = "white"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "white"
                          e.currentTarget.style.color = "black"
                        }}
                      >
                        <span>{item.buttonText}</span>
                        <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </a>

                      <a
                        href="/products"
                        className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-bold rounded-full transition-all duration-300 border-2 border-white/50 backdrop-blur-sm hover:bg-white/20 text-lg"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                        }}
                      >
                        <span>View All Products</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-8 right-8 z-10">
                  <div
                    className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm"
                    style={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white/60" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 z-10">
                  <div className="flex items-center space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                          background: i === 2 ? "white" : "rgba(255, 255, 255, 0.4)",
                          transform: i === 2 ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles */}
        <style jsx>{`
          .swiper-pagination {
            bottom: 40px !important;
          }
          
          .swiper-pagination-bullet {
            width: 14px !important;
            height: 14px !important;
            background: rgba(255, 255, 255, 0.4) !important;
            border: 2px solid rgba(255, 255, 255, 0.6) !important;
            border-radius: 50% !important;
            margin: 0 8px !important;
            transition: all 0.3s ease !important;
            opacity: 1 !important;
          }
          
          .swiper-pagination-bullet-active {
            width: 40px !important;
            background: white !important;
            border-radius: 7px !important;
            border-color: white !important;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            width: 60px !important;
            height: 60px !important;
            background: rgba(157, 48, 137, 0.8) !important;
            border-radius: 50% !important;
            border: 3px solid rgba(255, 255, 255, 0.3) !important;
            backdrop-filter: blur(15px) !important;
            transition: all 0.3s ease !important;
          }
          
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgb(157, 48, 137) !important;
            border-color: white !important;
            transform: scale(1.1) !important;
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px !important;
            color: white !important;
            font-weight: bold !important;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Banner
