import React from "react";
import { useNavigate } from "react-router-dom";
import yashu from "../assets/image/yashu.jpeg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-10 w-full h-screen px-4 pt-20 relative">
  
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Hi, I'm Yashu Sharma
        </h1>
        <p className="text-xl text-gray-300 mt-2">A Passionate Web Developer</p>
      </motion.div>

      <motion.img
        src={yashu}
        alt="Yashu Sharma"
        className="border-4 border-white shadow-lg rounded-full w-60 h-60 mt-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

     
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <button
          onClick={() => navigate("/resume")}
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
        >
          Get CV
        </button>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 md:right-10 flex gap-4"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <a
          href="mailto:yashus658@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:scale-110 transition-transform"
        >
          <MdOutlineEmail className="text-3xl md:text-4xl" />
        </a>

        <a
          href="https://wa.link/x3byjl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:scale-110 transition-transform"
        >
          <RiWhatsappFill className="text-3xl md:text-4xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/yashu-sharma-16056b341/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-3xl md:text-4xl" />
        </a>

        <a
          href="https://github.com/Yashu658"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform"
        >
          <IoLogoGithub className="text-3xl md:text-4xl" />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;