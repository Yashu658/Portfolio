import React from 'react'
import { Link } from "react-router-dom";
import Image2 from "../assets/image2.jpg"
import ImageSlider from "../pages/ImageSlider"
import '../index.css';  
const Home = () => {
  return (
   
    <div  className="relative top-5 bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${Image2})` }}>
       <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="grid justify-items-start ">
      <div className="relative z-10 text-white text-center space-x-2 p-10 top-20">
        <div>
        <h1 className="text-4xl text-green-600 font-extrabold">At Shoestor Responsibility Goes Beyond Just Words</h1>
          <h1 className="text-3xl text-pink-700 font-bold">We deliver comfort.</h1>
        <h3 className="text-3xl text-black font-bold">We are mindful of what we create and how it shapes the world around us. With a focus on circularity and transparency.  </h3>
        <ImageSlider />
        </div>
        </div>
      </div>
      </div>
  )
}

export default Home