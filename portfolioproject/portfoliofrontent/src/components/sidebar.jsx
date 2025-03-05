import React, { useState } from "react"; 

import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  
      <div className="ys ">
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 shadow-md py-4 px-6 flex justify-between items-center z-50">
      <NavLink to={"/"}>
      <h1 className="text-yellow-300 text-3xl font-bold mx-4 px-2 tracking-widest">YS</h1>
        </NavLink>
      <div className="flex gap-6">
         {/* Hamburger Menu Button (Visible on Small Screens) */}
      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:gap-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        
      </div>
      <NavLink to={"/"}>
            <span  className="block text-white text-2xl font-semibold px-6 py-3 hover:text-yellow-300 md:inline" onClick={() => setIsOpen(false)}>
              Home
            </span>
          </NavLink>
          <NavLink to={"/pro"}>
            <span className="block text-white text-2xl font-semibold px-6 py-3 hover:text-yellow-300 md:inline" onClick={() => setIsOpen(false)}>
              Projects
            </span>
          </NavLink>
          <NavLink to={"/quali"}>
            <span  className="block text-white text-2xl font-semibold px-6 py-3 hover:text-yellow-300 md:inline" onClick={() => setIsOpen(false)}>
              Qualification
            </span>
          </NavLink>
          <NavLink to={"/contact"}>
            <span  className="block text-white text-2xl font-semibold px-6 py-3 hover:text-yellow-300 md:inline" onClick={() => setIsOpen(false)}>
            ContactMe
            </span>
          </NavLink>
        </div>
          
        </nav> 
      </div>
    
  );
};
export default Sidebar;
