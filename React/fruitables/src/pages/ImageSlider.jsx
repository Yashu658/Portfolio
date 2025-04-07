import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/abc.css"

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



import { EffectFade, Navigation, Pagination, Autoplay  } from 'swiper/modules';
import Image2 from "../assets/imgh1.jpg";
import Image3 from "../assets/imgh2.jpg";

export default function ImageSlider() {
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}

        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={Image2} alt="Slide 1" className="w-full h-[250px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Slide 2" className="w-full h-[250px] object-cover" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
