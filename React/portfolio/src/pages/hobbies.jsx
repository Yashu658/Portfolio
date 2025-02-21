import React from "react";

const Hobbies = () => {
  return (
    <div className="m-30">
      <div class="max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-4">
          Hobbies & Interests
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
          <div class="bg-gray-200 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">Coding Challenges</p>
          </div>

          <div class="bg-gray-200 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">Tech Blogging</p>
          </div>

          <div class="bg-gray-200 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">Open Source Contribution</p>
          </div>

          <div class="bg-gray-200 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">Photography</p>
          </div>

          <div class="bg-gray-200 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
