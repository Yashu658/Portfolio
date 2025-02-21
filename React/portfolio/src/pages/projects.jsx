import React from 'react'

const Projects = () => {
  return (
    <div>
       <div class="max-w-2xl bg-blue-50 shadow-lg rounded-xl p-6">
        <h1 class="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-4">Projects</h1>

       
        <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-800">E-Commerce Website</h3>
            <p class="text-gray-600">Technologies: React, Tailwind CSS, Node.js, MongoDB</p>
            <p class="text-gray-700 mt-2">
                Developed a full-stack e-commerce website with user authentication, product 
                listings, cart functionality, and Stripe payment integration.
            </p>
           
        </div>

      
        <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-800">Portfolio Website</h3>
            <p class="text-gray-600">Technologies: HTML, CSS, JavaScript, Tailwind CSS</p>
            <p class="text-gray-700 mt-2">
                Built a responsive portfolio website to showcase projects and skills. 
                Implemented animations and smooth scrolling for a better user experience.
            </p>
            
        </div>

        
        <div>
            <h3 class="text-xl font-semibold text-gray-800">Task Management App</h3>
            <p class="text-gray-600">Technologies: Vue.js, Firebase, Tailwind CSS</p>
            <p class="text-gray-700 mt-2">
                Created a real-time task management app where users can add, edit, and delete 
                tasks. Implemented Firebase for authentication and data storage.
            </p>
            
        </div>
    </div>
    </div>
  )
}

export default Projects;