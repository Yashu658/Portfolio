 import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import Payment from "../assets/Payment1.png"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white w-full py-12 px-6 md:px-12">
        <div className="flex flex-wrap mt-10 justify-between items-center max-w-7xl mx-auto border-b border-yellow-300 pb-6">
          <div className="px-3">
            <h1 className="text-5xl font-semibold text-green-600">Fruitables</h1>
            <h3 className="text-yellow-500">Fresh products</h3>
          </div>
          <div className="p-8 w-full md:w-auto">
          <div className="flex items-center bg-white rounded-3xl overflow-hidden w-full max-w-6xl mx-auto"> 
    <input
        type="text"
        placeholder="Your Email"
        className="px-10 py-3 flex-1 bg-white text-black outline-none text-lg w-full"
    />
    <button className="px-4 py-3  bg-green-400 text-white rounded-full bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 transition-all  hover:shadow-xl text-lg">
        Subscribe Now
    </button>
</div>
          </div>
          <div className="flex space-x-5">
            <CiTwitter className="text-5xl outline outline-yellow-300 text-yellow-500 hover:bg-amber-300 rounded-full p-3 cursor-pointer hover:text-black" />
            <FaFacebookF className="text-5xl outline outline-yellow-300 text-yellow-500 hover:bg-amber-300 rounded-full p-3 cursor-pointer hover:text-black" />
            <CiYoutube className="text-5xl outline outline-yellow-300 text-yellow-500 hover:bg-amber-300 rounded-full p-3 cursor-pointer hover:text-black" />
            <FaLinkedinIn className="text-5xl outline outline-yellow-300 text-yellow-500 hover:bg-amber-300 rounded-full p-3 cursor-pointer hover:text-black" />
          </div>
        </div>
      
        {/* Footer Grid Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 px-6 md:px-12">
          <div>
            <h2 className="text-2xl font-semibold">Why People Like Us!</h2>
            <p className="mt-3 text-gray-400 text-sm">
              Typesetting, remaining essentially unchanged. It was popularised in the 1960s with Aldus PageMaker.
            </p>
            <button className="px-5 py-3 mt-6 text-green-500 text-lg outline outline-yellow-300 rounded-3xl hover:bg-amber-300 hover:text-white transition-all cursor-pointer">
              Read More
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Shop Info</h2>
            <ul className="mt-3 text-gray-400 text-sm space-y-3">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Return Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs & Help</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Account</h2>
            <ul className="mt-3 text-gray-400 text-sm space-y-3">
              <li><a href="#" className="hover:text-gray-300">My Account</a></li>
              <li><a href="#" className="hover:text-gray-300">Shop Details</a></li>
              <li><a href="#" className="hover:text-gray-300">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-gray-300">Wishlist</a></li>
              <li><a href="#" className="hover:text-gray-300">Order History</a></li>
              <li><a href="#" className="hover:text-gray-300">International Orders</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <ul className="mt-3 text-gray-400 text-sm space-y-3">
              <li><a href="#" className="hover:text-gray-300">Address: 1429 Netus Rd, NY 48247</a></li>
              <li><a href="#" className="hover:text-gray-300">Email: Example@gmail.com</a></li>
              <li><a href="#" className="hover:text-gray-300">Phone: +0123 4567 8910</a></li>
              <li><img src={Payment} alt="Payment Methods" className="mt-3" /></li>
            </ul>
          </div>
        </div>
      
        {/* Footer Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 text-center flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
          <p className="text-white text-base">
            &copy; <a href="#" className="hover:text-green-600 text-green-400">Your Site Name</a>, All rights reserved.
          </p>
          <p className="text-white text-base mt-2 md:mt-0">
            Designed By <a href="https://htmlcodex.com/" className="hover:text-green-600 text-green-400"><u>HTML Codex</u></a> 
            | Distributed By <a href="https://themewagon.com/" className="hover:text-green-600 text-green-400"><u>ThemeWagon</u></a>
          </p>
        </div>
      </footer>
      
    
    
    );
};

export default Footer;