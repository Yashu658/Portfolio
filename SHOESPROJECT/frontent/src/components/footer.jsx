import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      
      <div className="flex justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-semibold max-w-2xl leading-snug">
          Our page has come to an end, <br /> but our relationship with you has not.
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-20 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-green-500">Shoestore</h2>
            <p className="mt-3 text-gray-400">
              We believe that the right pair of shoes can take you anywhere. From stylish sneakers to formal dress shoes, we offer a curated collection of high-quality footwear that blends comfort and fashion effortlessly.
            </p>
          </div>

          
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-pink-500">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>


          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-blue-400">Follow Us</h3>
            <p className="text-gray-400 mt-2">
              Stay connected for updates on new arrivals, exclusive deals, and style inspiration.
            </p>
            <div className="flex gap-5">
            <a href="#" className="text-blue-700 hover:scale-110 transition-transform"><FaFacebook className="text-3xl" /></a>
            <a href="#" className="text-amber-400 hover:scale-110 transition-transform"><FaInstagram className="text-3xl" /></a>
            </div>
            
          </div>
        </div>

        <div className="footer-categories grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-gray-400">
        
          <div className="category">
            <h3 className="text-lg font-semibold text-green-400">Slippers Collection</h3>
            <ul className="mt-2 space-y-1">
              {["Slippers", "Chappal", "Men's Slippers", "Women's Slippers", "Stylish Slippers for Women", "Best Slippers for Women", "Black Slippers", "White Slippers"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          
          <div className="category">
            <h3 className="text-lg font-semibold text-yellow-400">Sandals Collection</h3>
            <ul className="mt-2 space-y-1">
              {["Sandals", "Sandals for Men", "Extra Sandals for Men", "Extra Sandals for Women", "Sandals for Women", "Daily Sandals for Men", "Gents Sandals", "Ladies Sandals", "Trendy Sandals for Men"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

        
          <div className="category">
            <h3 className="text-lg font-semibold text-blue-400">Slip-Ons Collection</h3>
            <ul className="mt-2 space-y-1">
              {["Slip-Ons", "Formal Slip-Ons for Men", "Slip-Ons for Men", "Casual Slip-Ons for Women", "Newly Launched Slip-Ons", "Walking Slip-Ons for Men", "Slip-Ons for Women", "Chunky Slip-Ons for Men"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          
          <div className="category">
            <h3 className="text-lg font-semibold text-red-400">Slides Collection</h3>
            <ul className="mt-2 space-y-1">
              {["Slides", "Men Slides", "Best Slides for Men", "Women Slides"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Shoestore. All rights reserved.</p>

          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" className="text-blue-700 hover:scale-110 transition-transform"><FaFacebook className="text-3xl" /></a>
            <a href="#" className="text-amber-400 hover:scale-110 transition-transform"><FaInstagram className="text-3xl" /></a>
            <a href="#" className="text-green-500 hover:scale-110 transition-transform"><RiWhatsappFill className="text-3xl" /></a>
            <a href="#" className="text-blue-700 hover:scale-110 transition-transform"><FaLinkedin className="text-3xl" /></a>
            <a href="#" className="text-blue-500 hover:scale-110 transition-transform"><MdOutlineEmail className="text-3xl" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

