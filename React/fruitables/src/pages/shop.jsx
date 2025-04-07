import { useState } from "react";
import S1 from "../assets/apple123.jpg";
import { CiSearch } from "react-icons/ci";
import { FaAppleAlt } from "react-icons/fa";
import S2 from "../assets/banner-shop2.jpg";

import img5 from "../assets/fruite-item-3.jpg";
import img6 from "../assets/fruite-item-2.jpg";
import img7 from "../assets/fruite-item-4.jpg";
import img8 from "../assets/fruite-item-5.jpg";
import img9 from "../assets/fruite-item-1.jpg";
import { FaBagShopping } from "react-icons/fa6";
import featur1 from "../assets/featur-1.jpg";
import featur2 from "../assets/featur-2.jpg";
import featur3 from "../assets/featur-3.jpg";
import { IoStarSharp } from "react-icons/io5";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState(0);

  const products = [
    {
      id: 1,
      name: "Grapes",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 2,
      name: "Grapes",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 3,
      name: "Raspberries",
      price: "$4.99 / kg",
      img: img6,
    },
    {
      id: 4,
      name: "Apricots",
      price: "$4.99 / kg",
      img: img7,
    },
    { id: 5, name: "Banana", price: "$4.99 / kg", img: img5 },
    {
      id: 6,
      name: "Oranges",
      price: "$4.99 / kg",
      img: img9,
    },
    {
      id: 7,
      name: "Raspberries",
      price: "$4.99 / kg",
      img: img6,
    },
    {
      id: 8,
      name: "Grapes",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 9,
      name: "Oranges",
      price: "$4.99 / kg",
      img: img9,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div className="flex flex-col md:flex-row justify-between items-center mt-25 mx-28 ">
        <div className="w-full md:w-auto mb-7">
          <h1 className="text-gray-500 text-4xl mb-6 md:mb-0">
            Fresh Fruits Shop
          </h1>

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
        <div className="flex items-center bg-gray-100 rounded-lg px-4 mt-15 md:mt-0">
          <h1 className="text-gray-400 mr-2">Default Sorting:</h1>
          <select className="bg-transparent text-gray-700 outline-none py-5 px-8">
            <option value="Nothing">Nothing</option>
            <option value="Popularity">Popularity</option>
            <option value="Organic">Organic</option>
            <option value="Fantastic">Fantastic</option>
          </select>
        </div>
      </div>

      <div className="flex ml-28 mr-26">
        <div className="">
          <div className="w-full max-w-sm mb-8">
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

          <div className="w-full max-w-sm mt-11 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Price</h2>
            <div className="mr-7 text-gray-500">
              <input
                type="range"
                min="0"
                max="500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-green-500 cursor-pointer text-gray-200"
              />
              <p className="mt-2 text-gray-500 font-semibold">{price}</p>
            </div>
          </div>

          <div className="w-full max-w-sm mt-8">
            <h2 className="text-2xl font-semibold text-gray-600 mb-3">
              Additional
            </h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 ">
                <input
                  type="radio"
                  name="category"
                  value="Organic"
                  className="w-3 h-3 text-gray-400"
                />
                <span className="text-gray-500">Organic</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="category"
                  value="Fresh"
                  className="w-3 h-3 text-gray-400"
                />
                <span className="text-gray-500 ">Fresh</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value="Sales"
                  className="w-3 h-3 text-gray-400"
                />
                <span className="text-gray-500">Sales</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value="Discount"
                  className="w-3 h-3 text-gray-400"
                />
                <span className="text-gray-500">Discount</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value="Expired"
                  className="w-3 h-3 text-gray-400"
                />
                <span className="text-gray-500">Expired</span>
              </label>
            </div>
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

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="max-w-sm mx-auto">
                  <div className="bg-white rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md">
                    <div className="group relative">
                      <div className="md:w-full cursor-pointer relative">
                        <img
                          className="h-53 w-full object-cover transform transition-transform duration-300 hover:scale-110"
                          src={product.img}
                          alt={product.name}
                        />
                      </div>

                      <div className="p-5 md:w-full flex flex-col justify-between border-2 border-t-0 rounded-b-xl border-yellow-400 text-center">
                        <h1 className="text-2xl text-gray-600">
                          {product.name}
                        </h1>
                        <p className="text-gray-600 mt-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod te incididunt
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl font-bold text-gray-600">
                            {product.price}
                          </span>
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
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-xl col-span-full">
                No products found.
              </p>
            )}
          </div>

          <div className="mt-18">
            <div className="flex items-center gap-2 justify-center mt-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <button className="px-4 py-2 bg-white border border-yellow-400 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white">
                  «
                </button>
                <button className="px-4 py-2 bg-green-500 border border-yellow-400 rounded-md ">
                  1
                </button>
                {[2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    className="px-4 py-2 bg-white border border-yellow-400 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white"
                  >
                    {num}
                  </button>
                ))}
                <button className="px-4 py-2 bg-white border border-yellow-400 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white">
                  »
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
