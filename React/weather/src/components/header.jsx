import React from "react";
import { IoIosRainy, IoIosSunny } from "react-icons/io";
import { FaRegSnowflake } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="h-28 w-full max-w-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-extrabold flex items-center justify-between text-4xl shadow-2xl rounded-b-3xl px-8">
          <IoIosSunny className="text-amber-300 text-6xl animate-bounce " />
          <IoIosRainy className="text-blue-300 text-6xl animate-pulse " />
          <span className="text-white shadow-lg text-5xl ">Weather App</span>
          <FaRegMoon className="text-blue-300 text-6xl animate-pulse" />
          <FaRegSnowflake className="text-blue-100 text-6xl animate-pulse" />
        </div>
      </div>
    </>
  );
};

export default Header;
