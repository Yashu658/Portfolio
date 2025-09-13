import React from "react";
import Dice from "../assets/image/dicegame.png";
import Tasklist from "../assets/image/tasklist1.png";
import Port from "../assets/image/portfolio.png";
import Ecommerce from "../assets/image/e-commerce.jpeg";

const Projects = () => {
  return (
    <div className="pt-20 w-full min-h-screen flex flex-col items-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 pb-3 mb-8 text-center">
          My Projects
        </h1>

        <div className="mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">Dice Game</h3>
            <p className="text-gray-600">
              <b>Technologies:</b> HTML, Bootstrap, JavaScript
            </p>
            <p className="text-gray-700 mt-2">
              A dice game that generates random numbers and determines the outcome based on chance.
            </p>
            <a
              href="https://67c8a84dec2e76c53e8dd98e--imaginative-cannoli-5fc46b.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
            >
              Visit Project
            </a>
          </div>
          <img src={Dice} alt="Dice Game"  className="w-50 sm:w-40 rounded-lg shadow-md transition-transform hover:scale-105" />
        </div>


        <div className="mb-10 mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">Task List</h3>
            <p className="text-gray-600">
              <b>Technologies:</b> React.js, Tailwind CSS
            </p>
            <p className="text-gray-700 mt-2">
              Created a real-time task management where users can add and delete tasks.
            </p>
            <a
              href="https://67c723273e952b24159e1359--capable-biscochitos-0e6153.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
            >
              Visit Project
            </a>
          </div>
          <img src={Tasklist} alt="Task List"  className="w-36 sm:w-40 rounded-lg shadow-md transition-transform hover:scale-110" />
        </div>



        <div className="mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              E-Commerce Website
            </h3>
            <p className="text-gray-600">
              <b>Technologies:</b> React, Tailwind CSS, Node.js, MongoDB
            </p>
            <p className="text-gray-700 mt-2">
              Developed a full-stack e-commerce website with user authentication,
              product listings, cart functionality, and Stripe payment integration.
            </p>
            <a
              href="https://ecommerce-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
            >
              Visit Project
            </a>
          </div>
          <img src={Ecommerce} alt="Ecommerce"  className="w-36 sm:w-40 rounded-lg shadow-md transition-transform hover:scale-105"/>
        </div>

       

    
       
      </div>
    </div>
  );
};

export default Projects;