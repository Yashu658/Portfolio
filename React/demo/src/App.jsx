import React from 'react';
import yashu from './image/yashu.jpeg'

function App(){

  return(
    <>
    <dev className="container text-red-500">I am a react webpage</dev>
   <div className="bg-indigo-300">
    <h1>online form</h1>
    <img src={yashu} alt="yas" className='w-25'/>
    <h1>YASHU SHARMA</h1>
    <h2>Full-Stack Developer</h2>
    <h3><b>WORK EXPERIENCE</b></h3>
    <h4>Full-Stack Developer</h4>
    <h5><b><u>ricr</u></b></h5>
    <h3><b>EDUCATION</b></h3>
    
    <h3><b>SKILL</b></h3>


   </div>
    
    </>
  )
}

export default App;