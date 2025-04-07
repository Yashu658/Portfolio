import { useState } from "react";
import S1 from "../assets/apple123.jpg";
import { CiSearch } from "react-icons/ci";
import { FaAppleAlt } from "react-icons/fa";
import S2 from "../assets/banner-shop2.jpg";

import featur1 from "../assets/featur-1.jpg";
import featur2 from "../assets/featur-2.jpg";
import featur3 from "../assets/featur-3.jpg";
import featur4 from "../assets/featur-4.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import VegeSlider from "./vegeSlider";
const Shopdetail = () => {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const increment = () => setCount((prev) => (prev < 10 ? prev + 1 : prev));
  return (
    <div>
      <div className="mb-2 relative w-full ">
        <img src={S1} alt="Shop Banner" className="w-full h-44  object-cover" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">Shop</h1>
          <div className="mt-2 text-white space-x-2">
            <a href="#" className=" text-green-500 text-xl ">
              Home
            </a>
            <span className="text-gray-500 text-l">/</span>
            <a href="#" className=" text-green-500 text-xl">
              Pages
            </a>
            <span className="text-gray-500 text-xl ">/</span>
            <a href="#" className="text-xl ">
              Shop
            </a>
          </div>
        </div>
      </div>

      <div className="flex ml-20 mr-20 mt-25">
      <div className="flex flex-col p-6 space-y-6">
  
  <div className="flex space-x-6 p-6 rounded-lg">
    <div>
      <img
        src={featur4}
        alt="Broccoli"
        className="border border-gray-200 rounded-lg w-200 h-120"
      />
    </div>
    <div className="grid space-y-3">
      <h1 className="text-gray-800 text-2xl font-bold">Broccoli</h1>
      <span className="text-gray-400">Category: Vegetables</span>
      <span className="font-bold text-gray-600 text-xl">3,35 $</span>
      <div className="flex space-x-1">
        <IoStarSharp className="text-yellow-400 text-xl" />
        <IoStarSharp className="text-yellow-400 text-xl" />
        <IoStarSharp className="text-yellow-400 text-xl" />
        <IoStarSharp className="text-yellow-400 text-xl" />
        <IoStarSharp className="text-gray-400 text-xl" />
      </div>
      <p className="text-gray-600">
        The generated Lorem Ipsum is therefore always free from repetition
        injected humour, or non-characteristic words etc.
      </p>
      <p className="text-gray-600">
        Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock
        flounder; chain pickerel hatchetfish.
      </p>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-500 text-2xl border border-gray-300 rounded-full"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-gray-500 font-bold">{count}</span>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-500 text-2xl border border-gray-300 rounded-full"
          onClick={increment}
        >
          +
        </button>
      </div>
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

  
  <div className="p-6 rounded-lg ">
    <div className="flex space-x-6 text-lg font-semibold">
      <h1 className="cursor-pointer">Description</h1>
      <h1 className="cursor-pointer">Reviews</h1>
    </div>
    <hr className="my-4" />
    <p className="text-gray-600">
      The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
    </p>
    <p className="text-gray-600">
      Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish.
    </p>
   
    <div className="mt-4 p-4 rounded-lg">
      <div className="flex bg-white p-2">
        <div className="w-1/2 font-semibold">Weight</div>
        <div className="w-1/2">1 kg</div>
      </div>
      <div className="flex bg-gray-100 p-2">
        <div className="w-1/2 font-semibold">Country of Origin</div>
        <div className="w-1/2">Agro Farm</div>
      </div>
      <div className="flex bg-white p-2">
        <div className="w-1/2 font-semibold">Quality</div>
        <div className="w-1/2">Organic</div>
      </div>
      <div className="flex bg-gray-100 p-2">
        <div className="w-1/2 font-semibold">Check</div>
        <div className="w-1/2">Healthy</div>
      </div>
      <div className="flex bg-white p-2">
        <div className="w-1/2 font-semibold">Min Weight</div>
        <div className="w-1/2">250 Kg</div>
      </div>
    </div>
  </div>

  
  <div className="p-6 rounded-lg ">
    <h1 className="font-bold text-gray-600 text-2xl">Leave a Reply</h1>
    <div className="mt-4 space-y-4">
      <div className="flex space-x-6">
        <input type="text" placeholder="Your name *" className="flex-1 border-b border-gray-300 focus:ring-2 ring-green-300 p-2" />
        <input type="text" placeholder="Your Email *" className="flex-1 border-b border-gray-300 p-2" />
      </div>
      <textarea name="review" placeholder="Your Review *" className="w-full  border-b border-gray-300 py-25"></textarea>
      <div className="flex ">
      <div className="flex items-center space-x-3">
        <span className="text-gray-600">Please rate:</span>
        <div className="flex space-x-1">
          <IoStarSharp className="text-gray-400 text-xl" />
          <IoStarSharp className="text-gray-400 text-xl" />
          <IoStarSharp className="text-gray-400 text-xl" />
          <IoStarSharp className="text-gray-400 text-xl" />
          <IoStarSharp className="text-gray-400 text-xl" />
        </div>
      </div>
      <div className="ml-120">
      <button className="flex items-center gap-2 text-green-500 px-6 py-3 rounded-full border border-yellow-400 ring-2 ring-green-200 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white">
        Post Comment
      </button>
      </div>
      
      </div>
      
    </div>
  </div>
</div>


        <div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center mt-25  ">
              <div className="flex mt-6 items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Keywords"
                  className="p-4 w-full text-gray-500 outline-none"
                />
                <button className="p-5 bg-gray-200 rounded-r-lg">
                  <CiSearch className="text-xl text-gray-700" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-sm mb-8  items-center mt-25  ">
              <h2 className="text-2xl font-semibold text-gray-600 mb-3">
                Categories
              </h2>
              <ul className="">
                <li className="flex justify-between items-center py-1 px-1   ">
                  <span className="flex items-center text-green-500 hover:text-yellow-400 transition">
                    <FaAppleAlt className="mr-2" />
                    Apples
                  </span>
                  <span className=" text-gray-400 px-6 py-1 rounded-md text-sm font-semibold">
                    (3)
                  </span>
                </li>
                <li className="flex justify-between items-center py-1 px-1">
                  <span className="flex items-center text-green-500 hover:text-yellow-400 transition">
                    <FaAppleAlt className="mr-2" />
                    Oranges
                  </span>
                  <span className=" text-gray-400 px-6 py-1 rounded-md text-sm font-semibold">
                    (5)
                  </span>
                </li>
                <li className="flex justify-between items-center py-1 px-1">
                  <span className="flex items-center text-green-500 hover:text-yellow-400 transition">
                    <FaAppleAlt className="mr-2" />
                    Strawberry
                  </span>
                  <span className=" text-gray-400 px-6 py-1 rounded-md text-sm font-semibold">
                    (2)
                  </span>
                </li>
                <li className="flex justify-between items-center py-1 px-1">
                  <span className="flex items-center text-green-500 hover:text-yellow-400 transition">
                    <FaAppleAlt className="mr-2" />
                    Banana
                  </span>
                  <span className=" text-gray-400 px-6 py-1 rounded-md text-sm font-semibold">
                    (8)
                  </span>
                </li>
                <li className="flex justify-between items-center py-1 px-1 ">
                  <span className="flex items-center text-green-500 hover:text-yellow-400 transition ">
                    <FaAppleAlt className="mr-2" /> Pumpkin
                  </span>
                  <span className=" text-gray-400 px-6 py-1 rounded-md text-sm font-semibold">
                    (5)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="mt-10">
                <h1 className="text-2xl font-semibold text-gray-600 mb-4">
                  Featured products
                </h1>
              </div>
              <div className="flex m-0 mr-5">
                <div className="">
                  <img src={featur1} alt="" className="h-20 rounded-lg " />
                </div>
                <div className="px-5 ml-10">
                  <h1>Big Banana</h1>
                  <span className="flex space-x-1 py-1 ml-0">
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-gray-400 text-xl m-0" />
                  </span>
                  <div className="flex space-x-1  ml-0">
                    <span className="font-bold text-gray-600"> 2.99$ </span>
                    <span className="px-3 text-red-700 line-through">
                      {" "}
                      4.11 $
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex mt-4 mr-5">
                <div className="">
                  <img src={featur2} alt="" className="h-20 rounded-lg " />
                </div>
                <div className="px-5 ml-10">
                  <h1>Big Banana</h1>
                  <span className="flex space-x-1 py-1 ml-0">
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-gray-400 text-xl m-0" />
                  </span>
                  <div className="flex space-x-1  ml-0">
                    <span className="font-bold text-gray-600"> 2.99$ </span>
                    <span className="px-3 text-red-700 line-through">
                      {" "}
                      4.11 $
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex mt-4 mr-5">
                <div className="">
                  <img src={featur3} alt="" className="h-20 rounded-lg " />
                </div>
                <div className="px-5 ml-10">
                  <h1>Big Banana</h1>
                  <span className="flex space-x-1 py-1 ml-0">
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-yellow-400 text-xl m-0" />
                    <IoStarSharp className="text-gray-400 text-xl m-0" />
                  </span>
                  <div className="flex space-x-1  ml-0">
                    <span className="font-bold text-gray-600"> 2.99$ </span>
                    <span className="px-3 text-red-700 line-through">
                      {" "}
                      4.11 $
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-13">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <button className="flex items-center gap-2 text-green-500 px-30 py-4 rounded-full border border-yellow-400 ring-2 ring-green-200 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-green-500">
                    View More
                  </button>
                </a>
              </div>
            </div>

            <div className="mt-13 mb-35 mr-6 w-76 relative ">
              <img
                src={S2}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center  rounded-lg">
                <h1 className="text-yellow-400 text-2xl font-bold ml-50">
                  Fresh Fruits Banner
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-45">
        <VegeSlider />
      </div>
    </div>
  );
};

export default Shopdetail;
