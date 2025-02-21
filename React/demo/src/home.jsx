import React from 'react';

function Home(){

  return(
    <>
    <dev className="container text-red-500">I am a react webpage</dev>
   <div className='bg-blue-400'>
    <h1>online form</h1>
    <table>
            <tr>
                <td> <label for="name">Name:</label></td>
                <td><input type="text" name="name" id="name" placeholder="Enter your Name" className='border-black'/></td>
            </tr>
           <tr>
            <td>
                <label for="name" >Gender <span>male</span></label>
            </td>
            <td>
                <input type="radio" name="" id="" className='m-4'/>
            </td>
           </tr>
            
        </table>
       <button className='bg-red-500 mb-4 border p-4 '>submit</button>

   </div>
    
    </>
  )
}

export default Home;