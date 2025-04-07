import React from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "../css/abc.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS (optional)
import { FaBagShopping } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

import v1 from "../assets/vegetable-item-1.jpg";
import v2 from "../assets/vegetable-item-3.png";
import v3 from "../assets/vegetable-item-4.jpg";
import v4 from "../assets/vegetable-item-5.jpg";
import v5 from "../assets/vegetable-item-6.jpg";

const products = [
  { id: 1, name: "Potatoes", price: "$7.99 / kg", img: v4 },
  { id: 2, name: "Parsely", price: "$.99 / kg", img: v5 },
  { id: 3, name: "Potatoes", price: "$7.99 / kg", img: v4 },
  { id: 4, name: "Parsely", price: "$7.99 / kg", img: v5 },
  { id: 5, name: "Parsely", price: "$4.99 / kg", img: v5 },
  { id: 6, name: "Parsely", price: "$4.99 / kg", img: v1 },
  { id: 7, name: "Banana", price: "$4.99 / kg", img: v2 },
  { id: 8, name: "Bell Papper", price: "$7.99 / kg", img: v3 },
];

 export default function App() {
    useEffect(() => {
        setTimeout(() => {
          const nextBtn = document.querySelector(".custom-next");
          const prevBtn = document.querySelector(".custom-prev");
          if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", () => document.querySelector(".swiper-button-next")?.click());
            prevBtn.addEventListener("click", () => document.querySelector(".swiper-button-prev")?.click());
          }
        }, 500); 
      }, []);
  return (
    <div className="slider-container mx-28 relative">
     
      <div className="mb-10 flex justify-between items-center">
        <h1 className="text-gray-600 text-5xl font-semibold">Fresh Organic Vegetables</h1>
        <div className="flex gap-6">
          
          <button className="custom-next items-center gap-2 text-green-500 px-8 py-2 rounded-full border border-yellow-400 hover:bg-yellow-500 hover:text-white">
              <IoIosArrowRoundBack className="text-3xl"/>
          </button>
          <button className="custom-prev items-center gap-2 text-green-500 px-8 py-2 rounded-full border border-yellow-400 hover:bg-yellow-500 hover:text-white">
            <IoIosArrowRoundForward  className="text-3xl"/>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={4} 
        spaceBetween={20} 
        loop={true} 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        speed={800}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="vege-slider-card bg-white border border-green-600 rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-2xl">
              <div className="relative">
                
                <span className="absolute top-2 right-2 bg-green-500 text-white text-l px-5 py-1 rounded-xl shadow-md z-10">
                  Vegetable
                </span>

             
                <img
                  className="vege-slider-image h-60 w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="p-5 text-center ">
                <h1 className="text-2xl text-gray-600">{product.name}</h1>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-gray-600">{product.price}</span>
                  <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                 <button className="flex items-center font-semibold gap-2 text-green-500 px-4 py-2 rounded-full border border-yellow-400 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white">
                  <FaBagShopping className="text-xl transition-all duration-300 ease-in-out text-green-500" />
                   Add to Cart
                  </button>
                  </a>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
