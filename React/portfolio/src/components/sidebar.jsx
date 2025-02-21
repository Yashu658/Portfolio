import React from 'react'
import yashu from "../assets/image/yashu.jpeg";
import {NavLink} from "react-router-dom"
const Sidebar = () => {
  return (
    <>
    <div className='w-80 h-[120vh]  bg-blue-300 text-black'>
    <div className="flex justify-center py-2">
        <img src={yashu} alt="yashu" className="border-4 rounded-full p-2 w-60 h-60" />
      </div>
      <span className='text-4xl font-bold  flex justify-center' >Yashu Sharma</span> 
        <span className='text-2xl font-bold  flex justify-center border-b-2' >Full Stack Developer</span>
    
    <div className="container m-10 text-blue-800">
        <ul className="list-disc  ">
            <li className='p-2'>
            <NavLink to={"/"}>
             <span className='text-blue-800 text-2xl my-1 font-bold'>Home</span>
            </NavLink>
            </li>
            <li className='p-2'>
            <NavLink to={"/exp"}>
             <span className='text-blue-800 text-2xl my-1 font-bold'>Experience</span>
            </NavLink>
            </li>
            <li className='p-2'>
            <NavLink to={"/pro"}>
             <span className='text-blue-800 text-2xl my-1 font-bold'>Projects</span>
            </NavLink>
            </li>
            <li className='p-2'>
            <NavLink to={"/quali"}>
             <span className='text-blue-800 text-2xl my-1 font-bold'>Qualification</span>
            </NavLink>
            </li>
            <li className='p-2'>
            <NavLink to={"/hobbi"}>
             <span className='text-blue-800 text-2xl my-1 font-bold'>Hobbies</span>
            </NavLink>
            </li>
            <li className='p-2'>
            <NavLink to={"/cont"}>
             <span className='text-blue-800 text-2xl my-1 font-bold'>Contactme</span>
            </NavLink>
            </li>
        </ul>
    
   
    </div>
 </div>
    </>
  )
}
export default Sidebar;
