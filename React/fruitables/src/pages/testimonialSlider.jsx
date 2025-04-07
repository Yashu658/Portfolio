import React from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "../css/abc.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import Testi from "../assets/testimonial-1.jpg";
import { FaQuoteRight } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

const products = [
  { id: 1, name: "P", img: Testi },
  { id: 2, name: "P", img: Testi },
  { id: 3, name: "P", img: Testi },
];

export default function TestimonialSlider() {
  useEffect(() => {
    setTimeout(() => {
      const nextBtn = document.querySelector(".custom-next");
      const prevBtn = document.querySelector(".custom-prev");
      if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () =>
          document.querySelector(".swiper-button-next")?.click()
        );
        prevBtn.addEventListener("click", () =>
          document.querySelector(".swiper-button-prev")?.click()
        );
      }
    }, 500);
  }, []);
  return (
    <div className="slider-container mx-28  relative">
    <div className="mb-5 flex flex-col items-center text-center">
      <div>
        <h2 className="text-green-500 text-2xl mb-3">Our Testimonial</h2>
        <h1 className="text-gray-600 text-5xl font-semibold">
          Our Client Saying!
        </h1>
      </div>
  
      {/* Right-aligned buttons */}
      <div className="flex gap-6 ml-auto">
        <button className="custom-prev flex items-center gap-2 text-green-500 px-8 py-2 rounded-full border border-yellow-400 hover:bg-yellow-500 hover:text-white">
        <IoIosArrowRoundBack className="text-3xl"/>
        </button>
        <button className="custom-next flex items-center gap-2 text-green-500 px-8 py-2 rounded-full border border-yellow-400 hover:bg-yellow-500 hover:text-white">
        <IoIosArrowRoundForward  className="text-3xl"/>
        </button>
      </div>
    </div>
 
  

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            <div className="vege-slider-card bg-gray-100 rounded-xl overflow-hidden ">
              <div className="p-5  ">
                <p className="text-gray-400 mt-1 mb-5 ">
                  Lorem ipsum is simply dummy text of the printing Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                </p>
                <hr className="text-yellow-400" />

                <div className="flex items-center justify-between mt-5">
                  <div>
                    <img
                      className="vege-slider-image h-60 w-full object-cover"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <div className="mr-70">
                    <div>
                      <h1 className="flex items-center font-semibold text-2xl text-gray-600 mt-1 ">
                        Client Name
                      </h1>
                      <p className=" text-gray-400 m-2 ml-0">Profession</p>
                    </div>
                    <div className="flex space-x-1 m-3 ml-0">
                      <IoStarSharp className="text-green-400 text-xl m-0" />
                      <IoStarSharp className="text-green-400 text-xl m-0" />
                      <IoStarSharp className="text-green-400 text-xl m-0" />
                      <IoStarSharp className="text-green-400 text-xl m-0" />
                      <IoStarSharp className="text-green-400 text-xl m-0" />
                    </div>
                  </div>
                  <div>
                  <p className=" text-yellow-500">
                  <FaQuoteRight className="text-3xl" />
                </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
