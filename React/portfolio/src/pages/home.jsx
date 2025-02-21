import React from 'react'

const Home = () => {
  return (

    <div className="w-40px h-100 border p-4 m-5 shadow-2xl bg-cyan-300">
      <div className="text-center m-2 font-bold text-2xl border-b-2"> <a href="#bio">Bio</a></div>
      <section id="bio">
            <p>Passionate software developer with year of experience in web and mobile development.
            Skilled in JavaScript, React, and Node.js. Dedicated to building scalable and user-friendly applications.</p>
        </section>
    </div>
  )
}

export default Home;