import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  
  return (
    <div className="w-full">

      {/* {for hidden on small screen (mobile) use="hidden md:"} */}
      <div className="hidden md:flex justify-between items-center px-10 py-2 text-sm rounded-bl-2xl rounded-tr-2xl rounded-tl-4xl rounded-br-4xl bg-green-500 mx-24">
        
        <div className="flex  h-8  ">
        <span className="flex py-2 px-2 items-center text-white">
          {" "}
          <FaLocationDot className="text-xl text-yellow-500 mr-2" /> 123 Street,
          New York{" "}
        </span>
        <span className="flex py-2 px-2 items-center text-white">
          <MdEmail className="text-xl text-yellow-500 mr-2 " /> Email@Example.com
        </span>
        </div>

        <div>
          <div className="py-2 text-white text-sm flex items-center space-x-2">
            <NavLink to={"/privacy-policy"} className="hover:text-yellow-500">
              Privacy Policy
            </NavLink>
            <span>/</span>
            <NavLink to={"/terms-of-use"} className="hover:text-yellow-500">
              Terms of Use
            </NavLink>
            <span>/</span>
            <NavLink to={"/sales-refunds"} className="hover:text-yellow-500">
              Sales and Refunds
            </NavLink>
          </div>
        </div>
      </div>



      <nav className="flex w-full h-25  justify-between items-center bg-white shadow-2xl mt-0">
        <span className=" ml-25 text-5xl font-bold text-green-500">
          Fruitables
        </span>


       {/* Mobile Menu Button */}
       <button
        className="md:hidden text-3xl text-green-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoIosClose /> : <IoIosMenu />}
      </button>

      <div className="hidden md:flex space-x-4 text-lg justify-center mt-4 text-gray-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-5 ${isActive ? "text-green-600 " : "hover:text-green-500"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `mx-5 ${isActive ? "text-green-600" : "hover:text-green-500"}`
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/Shopdetail"
          className={({ isActive }) =>
            `mx-5 ${isActive ? "text-green-600 " : "hover:text-green-500"}`
          }
        >
          Shop Detail
        </NavLink>

        <NavLink
          to="/pages"
          className={({ isActive }) =>
            `mx-5 flex items-center space-x-1 ${isActive ? "text-green-600 " : "hover:text-green-500"}`
          }
        >
          <span className="flex">
            Pages
            <IoIosArrowDown className="ml-1 mt-2 text-gray-600" />
          </span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `mx-5 ${isActive ? "text-green-600 " : "hover:text-green-500"}`
          }
        >
          Contact
        </NavLink>
      </div>


        <div className=" hidden md:flex justify-center space-x-4 ">
          <NavLink
            to={"/search"}
            className="p-3 rounded-full border-2 border-yellow-500 bg-white hover:bg-yellow-500 transition duration-300 hover:border-yellow-500"
          >
            <CiSearch className=" text-green-400 text-1xl hover:bg-yellow-500 " />
          </NavLink>
          <NavLink to={"/cart"}>
            <FaBagShopping className="mx-3 text-green-400 text-4xl hover:text-green-700" />
          </NavLink>
          <NavLink to={"/profile"}>
            <IoMdPerson className="mr-19 text-green-400 text-4xl  hover:text-green-700" />
          </NavLink>
        </div>
      </nav>




     {/* {Mobile Menu (Dropdown)} */}
     {menuOpen && (
      <div className="md:hidden absolute top-20 left-0 bg-white shadow-lg  w-full">
      <NavLink to={"/"} className="hover:text-green-500 mx-5 py-2">
            <span>Home</span>
          </NavLink>
          <NavLink to={"/shop"} className="block hover:text-green-500 mx-5 py-2">
            <span>Shop</span>
          </NavLink>
          <NavLink to={"/Shopdetail"} className="block hover:text-green-500 mx-5 py-2">
            <span>Shop Detail</span>
          </NavLink>
          <NavLink
            to={"/pages"}
            className="hover:text-green-500 mx-5 flex items-center space-x-1 py-2"
          >
            <span className="flex">
              Pages
              <IoIosArrowDown className="ml-1 mt-2 text-gray-600" />{" "}
            </span>
          </NavLink>
          <NavLink
            to={"/contact"}
             className="block hover:text-green-500 mx-5 py-2"
          >
            <span>Contact</span>
          </NavLink>


          <div className="flex space-x-5 mt-4">
          <NavLink
            to={"/search"}
            className="p-2 rounded-full border-2 border-yellow-500 bg-white hover:bg-yellow-500 transition duration-300 hover:border-yellow-500"
          >
            <CiSearch className=" text-green-400 text-1xl hover:bg-yellow-500 " />
          </NavLink>
          <NavLink to={"/cart"}>
            <FaBagShopping className="mx-3 text-green-400 text-4xl hover:text-green-700" />
          </NavLink>
          <NavLink to={"/profile"}>
            <IoMdPerson className="mr-19 text-green-400 text-4xl  hover:text-green-700" />
          </NavLink>
        </div>
      </div>
       )}
    </div>
  );
};

export default Navbar;
