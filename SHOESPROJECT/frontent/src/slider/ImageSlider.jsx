import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/abc.css";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image3.jpg';
import img3 from '../assets/w3.jpg';
import img4 from '../assets/image12.jpg';
import img5 from '../assets/image8.jpg';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ImageSlider() {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper w-full h-[400px] max-h-[400px] overflow-hidden"
      >
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img src={img1} className="w-full h-full object-contain" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img src={img2} className="w-full h-full object-contain" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img src={img3} className="w-full h-full object-contain" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img src={img4} className="w-full h-full object-contain" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img src={img5} className="w-full h-full object-contain" alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}