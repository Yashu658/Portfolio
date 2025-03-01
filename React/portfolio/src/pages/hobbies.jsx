import React from "react";

const Hobbies = () => {
  return (
    <div className="pt-20 place-items-center">
      <div className="max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-4">
          Hobbies & Interests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold">Cricket</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold">Swmming</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold">Reading Books</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
