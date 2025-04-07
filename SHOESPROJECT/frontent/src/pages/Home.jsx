import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import Image2 from "../assets/shoes_1.webp";
import ImageSlider from "../slider/ImageSlider"
import S1 from "../slider/s1"
import img2 from "../assets/image3.jpg";
import img3 from "../assets/image4.webp";
import img4 from "../assets/w1.jpg";
import img5 from "../assets/w3.jpg";
import img6 from "../assets/image1.JPG";
import w2 from '../assets/wm4.jpeg';
import OfferSlider from "../slider/textslider";
const products = [
  { id: 1, name: "S1 Pro",description:" Designed for all-day comfort with breathable mesh, cushioned soles, and a sleek design. Perfect for casual wear or workouts.", price: "₹800", img: img2 },
  { id: 2, name: "G1",description:"Reduces impact and enhances comfort for all-day wear.", price: "₹1099", img: img3 },
  { id: 3, name: "JK",description:"Slip into effortless style with these ultra-soft, flexible, and breathable loafers, perfect for any casual outing.", price: "₹699", img: img4 },
  { id: 4, name: "BRL",description:"Supports natural movement and agility.", price: "₹1199", img: img5 },
  { id: 4, name: "KM",description:"hese lightweight and breathable PT shoes are designed for ultimate comfort, flexibility, and support. Featuring shock-absorbing midsoles, a durable rubber outsole for enhanced grip, and a snug yet breathable fit—perfect for gym workouts, running, and intense training sessions.", price: "₹999", img: img6 },
];

const Home = () => {
  return (
    <div>
      <div
        className="relative top-5 h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image2})` }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-10">
          <div className="w-full md:w-1/2 text-left space-y-4">
          
            <h1 className="text-4xl text-zinc-500 font-extrabold">
              At Shoestor, Responsibility Goes Beyond Just Words
            </h1>
            <h2 className="text-3xl text-pink-700 font-bold">
              We deliver comfort.
            </h2>
            <h3 className="text-2xl text-black font-bold">
              We are mindful of what we create and how it shapes the world
              around us. With a focus on circularity and transparency.
            </h3>
          </div>
          <div className="w-1/2 flex justify-center">
            <ImageSlider />
          </div>
          
        </div>
        
      </div>

      <div className="mt-10">
        <OfferSlider/>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-4">
  {products.map((product) => (
    <div
      key={product.id}
      className="w-64 h-[400px] bg-white rounded-xl shadow-md hover:bg-gray-100 overflow-hidden flex flex-col"
    >
      <img
        className="h-48 w-full object-cover"
        src={product.img}
        alt={product.name}
      />
      <div className="p-5 flex-grow flex flex-col">
        <h1 className="text-lg font-bold text-gray-800">{product.name}</h1>
        {product.description && (
          <p className="text-gray-600 mt-2 line-clamp-2 min-h-[40px]">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-green-600">
            {product.price}
          </span>
          <button className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
            <FaBagShopping className="text-xl px-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
   


   <div className="mt-10">
   <S1/>
   </div>
   <div className="mt-10">
   <img src={w2} alt="" height={100} width={2000} />
   </div >
   

<div>
  
</div>









    </div>
  );
};

export default Home;
