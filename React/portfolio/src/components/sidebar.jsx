import React from "react";
import ys from "../assets/ys.pdf"

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="ys ">
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 shadow-md py-4 px-6 flex justify-between items-center z-50">
          <NavLink to={"/"}>
            <span className="text-white text-2xl font-semibold mx-4 px-8 hover:text-yellow-300 ">
              Home
            </span>
          </NavLink>
          <NavLink to={"/pro"}>
            <span className="text-white text-2xl font-semibold mx-4 px-8 hover:text-yellow-300">
              Projects
            </span>
          </NavLink>
          <NavLink to={"/quali"}>
            <span className="text-white text-2xl font-semibold mx-4 px-8 hover:text-yellow-300">
              Qualification
            </span>
          </NavLink>
          <NavLink to={"/hobbi"}>
            <span className="text-white text-2xl font-semibold mx-4 px-8 hover:text-yellow-300">
              Hobbies
            </span>
          </NavLink>
          <NavLink to={"/contact"}>
            <span className="text-white text-2xl font-semibold mx-4 px-8 hover:text-yellow-300">
            ContactMe
            </span>
          </NavLink>
        </nav> 
      </div>
    </>
  );
};
export default Sidebar;
