import React from "react";
import Contactform from "../pages/contactform";
const Contactme = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Me
        </h1>
        <Contactform />
      </div>

  </div>
  );
};

export default Contactme;
