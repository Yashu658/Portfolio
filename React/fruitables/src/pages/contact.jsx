import React from 'react'
import S1 from "../assets/apple123.jpg"
const Contact = () => {
  return (
    <div>

      <div className="mb-2 relative w-full ">
        <img src={S1} alt="Shop Banner" className="w-full h-44  object-cover" />
    
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">Shop</h1>
          <div className="mt-2 text-white space-x-2">
            <a href="#" className=" text-green-500 text-xl ">Home</a>
            <span className='text-gray-500 text-l'>/</span>
            <a href="#" className=" text-green-500 text-xl">Pages</a>
            <span className='text-gray-500 text-xl '>/</span>
            <a href="#"className='text-xl '>Shop</a>
          </div>
        </div>
      </div>




      <div className='m-25 bg-gray-100 rounded-lg text-center'>
        <div className='py-10'>
        <h1 className='text-4xl text-green-500'>Get in touch</h1>
          <span className='text-gray-500'>The contact form is currently inactive. Get a functional and working contact form with Ajax & <br />PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</span>
          <p className='text-green-500 hover:text-green-600'><a href="https://htmlcodex.com/contact-form/">Download Now.</a></p>
          
        </div>
        <div className='text-center ml-39 mt-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.288552095168!2d77.45734829999999!3d23.268962699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2zUklDUiAtIOCksOCkvuCknCDgpIfgpILgpLjgpY3gpJ_gpL_gpJ_gpY3gpK_gpYLgpJ8g4KSR4KSr4KS8IOCkleCli-CkoeCkv-CkguCklyAmIOCksOCli-CkrOCli-Ckn-Ckv-CkleCljeCkuCB8IOCkrOClh-CkuOCljeCknyDgpJzgpL7gpLXgpL4g4KSV4KWL4KSh4KS_4KSC4KSXIOCkleCljeCksuCkvuCkuOClh-CkuCDgpIfgpKgg4KSt4KWL4KSq4KS-4KSy!5e0!3m2!1shi!2sin!4v1742851458867!5m2!1shi!2sin" width="1000" height="400" loading="lazy" className='rounded-lg border-2 border-gray-200' ></iframe>
        </div>
          <div className='px-20 py-20'>
            <div className='grid'>
              <input type="text" placeholder='Your Name' className='bg-white m-2'/>
              <input type="text" placeholder='Your Email' className='bg-white m-2' />
              <textarea name="msg" id="" placeholder='Your Message' className='bg-white m-2'></textarea>
              <button className='border-1 border-yellow-300 rounded-lg  bg-white text-green-500 hover:bg-yellow-300 hover:text-white '>Submit</button>
            </div>
          </div>
          
      </div>







      
    </div>
  )
}

export default Contact;