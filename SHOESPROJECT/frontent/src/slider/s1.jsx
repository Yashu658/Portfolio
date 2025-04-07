import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import w1 from '../assets/wm1.jpeg';
import w2 from '../assets/wm4.jpeg';
export default function S1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings}>
      <div className="flex">
        <img src={w1} alt=""  width={2000}/>
      </div>
      <div>
    
      <img src={w2} alt="" height={100} width={2000} />
      </div>
      
     
     
    </Slider>
  );
}