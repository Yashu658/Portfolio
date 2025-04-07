import React, { useState } from "react";
import Image1 from "../assets/background.png";
import img1 from "../assets/delivery2.png";
import img2 from "../assets/secure1.png";
import img3 from "../assets/service2.png";
import img4 from "../assets/phone1.png";

import img5 from "../assets/fruite-item-3.jpg";
import img6 from "../assets/fruite-item-2.jpg";
import img7 from "../assets/fruite-item-4.jpg";
import img8 from "../assets/fruite-item-5.jpg";
import img9 from "../assets/fruite-item-1.jpg";
import img10 from "../assets/fruite-item-6.jpg";
import ImageSlider from "./ImageSlider";
import VegeSlider from "./vegeSlider";
import TestimonialSlider from "./testimonialSlider";
import { FaBagShopping } from "react-icons/fa6";

import featur1 from "../assets/featur-1.jpg";
import featur2 from "../assets/featur-2.jpg";
import featur3 from "../assets/featur-3.jpg";

import Baner2 from "../assets/baner2.png";

import { IoStarSharp } from "react-icons/io5";
import people from "../assets/people.png";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all products");
  const products = [
    {
      id: 1,
      name: "Grapes",
      category: "vegetables",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 2,
      name: "Grapes",
      category: "bread",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 3,
      name: "Raspberries",
      category: "vegetables",
      price: "$4.99 / kg",
      img: img6,
    },
    {
      id: 4,
      name: "Apricots",
      category: "bread",
      price: "$4.99 / kg",
      img: img7,
    },
    { id: 5, name: "Banana", category: "meat", price: "$4.99 / kg", img: img5 },
    {
      id: 6,
      name: "Oranges",
      category: "fruits",
      price: "$4.99 / kg",
      img: img9,
    },
    {
      id: 7,
      name: "Raspberries",
      category: "meat",
      price: "$4.99 / kg",
      img: img6,
    },
    {
      id: 8,
      name: "Oranges",
      category: "meat",
      price: "$4.99 / kg",
      img: img9,
    },
    {
      id: 9,
      name: "Apple",
      category: "fruits",
      price: "$4.99 / kg",
      img: img10,
    },
    {
      id: 10,
      name: "Grapes",
      category: "general",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 11,
      name: "Grapes",
      category: "general",
      price: "$4.99 / kg",
      img: img8,
    },
    {
      id: 12,
      name: "Raspberries",
      category: "general",
      price: "$4.99 / kg",
      img: img6,
    },
    {
      id: 13,
      name: "Apricots",
      category: "general",
      price: "$4.99 / kg",
      img: img7,
    },
    {
      id: 14,
      name: "Banana",
      category: "general",
      price: "$4.99 / kg",
      img: img5,
    },
    {
      id: 15,
      name: "Oranges",
      category: "general",
      price: "$4.99 / kg",
      img: img9,
    },
    {
      id: 16,
      name: "Raspberries",
      category: "general",
      price: "$4.99 / kg",
      img: img6,
    },
    {
      id: 17,
      name: "Grapes",
      category: "general",
      price: "$4.99 / kg",
      img: img8,
    },
  ];

  const filteredProducts =
    selectedCategory === "all products"
      ? products.filter((product) => product.category === "general")
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="relative h-[550px] overflow-hidden">
        <img
          src={Image1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white opacity-70"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-10">
          <div className="w-1/2 text-left  ml-20">
            <strong className="text-yellow-500 text-2xl m-5 ">
              100% Organic Foods
            </strong>
            <h1 class="text-6xl font-bold text-green-600 m-5 ">
              Organic Veggies & Fruits Foods
            </h1>
            <div className="p-4">
              <div className="flex items-center border-2 border-yellow-500 bg-white rounded-full overflow-hidden w-full space-x-20 max-w-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-3 flex-1 bg-white text-black outline-none"
                />
                <button className="p-3 bg-green-400 text-white border-2 border-yellow-500 rounded-full bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-xl">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <ImageSlider />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 px-28 py-5 mt-30 mb-42">
        <img src={img1} alt="ys" className="rounded-lg w-full" />
        <img src={img2} alt="ys" className="rounded-lg w-full" />
        <img src={img3} alt="ys" className="rounded-lg w-full" />
        <img src={img4} alt="ys" className="rounded-lg w-full" />
      </div>

      <div className="container mx-auto  mt-10 mb-31">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-15">
          <h1 className="font-semibold text-gray-600 text-5xl md:text-5xl">
            Our Organic Products
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {["All Products", "Vegetables", "Fruits", "Bread", "Meat"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition ${
                    selectedCategory === category.toLowerCase()
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="max-w-sm mx-auto">
                <div className="bg-white rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md">
                  <div className="group relative">
                    <div className="md:w-full cursor-pointer relative">
                      <span className="absolute top-2 left-2 bg-yellow-400 text-white text-l px-5 py-1 rounded-xl shadow-md z-10">
                        Fruits
                      </span>

                      <img
                        className="h-53 w-full object-cover transform transition-transform duration-300 hover:scale-120"
                        src={product.img}
                        alt={product.name}
                      />
                    </div>

                    <div className="p-5 md:w-full flex flex-col justify-between border-2 border-t-0 rounded-b-xl border-yellow-400 text-center">
                      <h1 className="text-2xl text-gray-600">{product.name}</h1>
                      <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
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
      </div>

      <div className="flex mx-25 mb-35">
        <div className="flex flex-wrap w-full mx-2 gap-6 mt-16 mb-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-2 rounded-lg border-yellow-400 overflow-hidden relative"
          >
            <div className="relative">
              <img
                src={featur1}
                alt="Featured Product"
                className="w-full object-cover rounded-t-lg"
              />

              <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-10 p-4 rounded-lg shadow-lg z-10 text-center">
                <div className="text-xl font-semibold text-center">
                  <h5>Fresh Apples</h5>
                  <h3 className="text-3xl text-blue-950 font-bold">20%OFF</h3>
                </div>
              </div>

              <div className="w-full bg-yellow-400 py-16 rounded-b-md"></div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap w-full mx-3 gap-6 mt-16 mb-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-2 rounded-lg border-yellow-400 overflow-hidden relative"
          >
            <div className="relative">
              <img
                src={featur2}
                alt="Featured Product"
                className="w-full object-cover rounded-t-lg"
              />

              <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 bg-white text-green-500 px-8 p-4 rounded-lg shadow-lg z-10 text-center">
                <div className="text-xl font-semibold text-center">
                  <h5>Tasty Fruits</h5>
                </div>
                <h3 className="text-2xl text-blue-950 ">Free Delivery</h3>
              </div>

              <div className="w-full bg-yellow-400 py-16 rounded-b-md"></div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap w-full mx-3 gap-6 mt-16 mb-16 ">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-2 rounded-lg border-green-500 overflow-hidden relative"
          >
            <div className="relative">
              <img
                src={featur3}
                alt="Featured Product"
                className="w-full object-cover rounded-t-lg"
              />

              <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-white px-7 p-5 rounded-lg shadow-lg z-10 text-center">
                <div className=" text-center font-black ">
                  <h5>Exotic Vegetables</h5>
                  <h3 className="text-xl text-gray-600 ">Discount 30$</h3>
                </div>
              </div>

              <div className="w-full   bg-green-500 py-16 rounded-b-md"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="mb-45">
        <VegeSlider />
      </div>

      <div className="flex w-full min-h-screen bg-yellow-500 items-center  px-16 py-10">
        <div className="w-2/3 text-left ml-11 max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 max-w-2xl">
            Fresh Exotic Fruits
          </h1>
          <h1 className="text-6xl text-gray-600 mb-8">in Our Store</h1>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl">
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <button className="px-12 py-4 text-black font-semibold rounded-4xl border-2 border-white hover:bg-green-500 transition">
              BUY
            </button>
          </a>
        </div>

        <div className="relative flex justify-end">
          <div className="absolute top-0 left-0 flex bg-white text-gray-700 text-lg font-bold px-8 py-8 rounded-full">
            <h1 className="text-8xl">1</h1>
            <div className="text-2xl text-gray-500">
              <h1>50$</h1>
              <h1>kg</h1>
            </div>
          </div>

          <img
            src={Baner2}
            alt="Fresh Exotic Fruits"
            width={750}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="text-center mt-36">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">
          Bestseller Products
        </h1>
        <p className="text-gray-500 ml-105 mr-110">
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-6 py-4 ml-22 mr-22 mt-8 overflow-x-auto">
        {[img9, img6, img5, img7, img8, img10].map((img, index) => (
          <div
            key={index}
            className="flex items-center px-5 py-5 border-gray-200 rounded-lg min-w-[320px] bg-gray-100"
          >
            <img
              src={img}
              alt="Organic Tomato"
              className="w-44 h-44 rounded-full"
            />

            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl text-gray-700 font-semibold hover:text-green-500 mb-2">
                Organic Tomato
              </h1>

              <div className="flex space-x-1 mb-3">
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-gray-500 text-xl" />
              </div>
              <span className="text-xl font-bold text-gray-600  ">$3.12</span>

              <div className="mt-5">
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
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 px-6 py-4 ml-22 mr-22">
        {[img9, img6, img5, img7].map((img, index) => (
          <div key={index} className="flex flex-col items-center border-gray-200 rounded-lg ">
            <img src={img} alt="Organic Tomato" className="rounded-lg " />
            <div className="flex flex-col items-center w-full mt-3">
              <h1 className="text-xl text-gray-700 font-semibold hover:text-green-500 mb-2">Organic Tomato </h1>
              <div className="flex space-x-1 mb-3">
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-green-400 text-xl" />
                <IoStarSharp className="text-gray-500 text-xl" />
              </div>
              <span className="text-xl font-bold text-gray-600 mb-4">
                $3.12
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
        ))}
      </div>

      <div className="m-28 mt-38">
        <div className="flex flex-wrap justify-center bg-gray-100 gap-6 px-8 py-12 rounded-lg">
          {[
            { title: "SATISFIED CUSTOMERS", value: "1963" },
            { title: "QUALITY OF SERVICE", value: "99%" },
            { title: "QUALITY CERTIFICATES", value: "33" },
            { title: "AVAILABLE PRODUCTS", value: "789" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-15 text-center w-70 h-74 flex flex-col justify-center items-center ">
              <img src={people} alt="" className="mx-auto w-20 h-20 mb-4" />
              <h1 className="text-2xl text-green-500 font-semibold leading-tight text-center break-words w-full">{item.title}</h1>
              <h2 className="text-4xl font-semibold text-gray-600  mt-2">
                {item.value}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-36 ">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Home;
