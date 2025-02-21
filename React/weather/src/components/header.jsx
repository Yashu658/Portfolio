import React from 'react'
import { Router } from 'react-router-dom'
import { FaMoon } from "react-icons/fa6";

const Header = () => {

  return (
    
    <>
    <div>
    <div className="h-18 font-bold bg-blue-400 flex items-center">
            <FaMoon />
            <span className="ml-150">Weather</span>
        </div>

    </div>
      
    </>
        
    
  )
}

export default Header