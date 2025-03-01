import React from "react";
import ys from "../assets/ys.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>

      <a
        href={ys}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg"
      >
        View Resume
      </a>

      <a
        href={ys}
        download="Yashu_Sharma_Resume.pdf"
        className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
