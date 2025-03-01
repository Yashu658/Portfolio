import React from 'react'
import Image from "../assets/background.png"
const Home = () => {
  return (
    <div class="relative top-25 bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${Image})` }}>
  <div class="absolute inset-0 bg-white opacity-70"></div>
  <div class="relative z-10 text-white text-cente space-x-2 p-10 top-20">
    <strong className='text-yellow-500 text-3xl ml-40'>100% Organic Foods</strong>
    <h1 class="text-6xl font-bold text-green-600 mt-10 ">Organic Veggies & Fruits Foods</h1>
    <div className='p-4'>
    <div className="flex items-center border-2 border-yellow-500 rounded-3xl overflow-hidden w-full  max-w-md">
  <input
    type="text"
    placeholder="Search"
    className="p-3 flex-1 bg-white text-black outline-none"
  />
  <button className="p-3 bg-green-400 text-white rounded-2xl bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-xl">
    Submit Now
  </button>
</div>
    </div>
    
    
  </div>
</div>
    
  )
}

export default Home;