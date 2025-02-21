import React from "react";

const Contactme = () => {
  return (
    <div>
      <div class="max-w-2xl bg-white shadow-lg rounded-xl p-6 text-center m-40">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-4">
          Contact Me
        </h2>

        <div class="space-y-4">
          <div class="flex items-center justify-center space-x-2">
            <span class="text-gray-600 font-semibold">Email:</span>
            <a
              href="mailto:yashus658@example.com"
              class="text-blue-500 hover:underline"
            >
              yashus658@gmail.com
            </a>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="text-gray-600 font-semibold">Phone:</span>
            <a href="tel:+1234567890" class="text-blue-500 hover:underline">
              +91 8602498711
            </a>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="text-gray-600 font-semibold">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/yashu-sharma-16056b341/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              linkedin.com/in/yashu-sharma
            </a>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="text-gray-600 font-semibold">GitHub:</span>
            <a
              href="https://github.com/Yashu658"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              github.com/yashu-sharma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
