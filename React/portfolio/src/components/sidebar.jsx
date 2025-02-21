import React from 'react'
import yashu from "../assets/image/yashu.jpeg";
import {NavLink} from "react-router-dom"
const Sidebar = () => {
  return (
    <>
   
    <div className=''>
    <div className="flex w-auto h-[10vh] bg-amber-100">
    <NavLink to={"/"}>
             <span className='text-blue-800 text-2xl my-1 font-bold mx-16'>Home</span>
            </NavLink>
            <NavLink to={"/exp"}>
             <span className='text-blue-800 text-2xl my-1 font-bold mx-16'>Experience</span>
            </NavLink>
            <NavLink to={"/pro"}>
             <span className='text-blue-800 text-2xl my-1 font-bold mx-16'>Projects</span>
            </NavLink>
            <NavLink to={"/quali"}>
             <span className='text-blue-800 text-2xl my-1 font-bold mx-16'>Qualification</span>
            </NavLink>
          
            <NavLink to={"/hobbi"}>
             <span className='text-blue-800 text-2xl my-1 font-bold mx-16'>Hobbies</span>
            </NavLink>
            <NavLink to={"/cont"}>
             <span className="text-blue-800 text-2xl my-1 font-bold mx-16 ">Contactme</span>
            </NavLink>
    </div>
    <div className="flex justify-center bg-blue-300 text-black">
        <img src={yashu} alt="yashu" className="border-4 rounded-full w-60 h-60" />
      </div>
    </div>
    </>
  )
}
export default Sidebar;
