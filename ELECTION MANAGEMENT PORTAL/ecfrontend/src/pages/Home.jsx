// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Election Management Portal
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A secure, transparent, and easy-to-use platform for managing elections in NGOs, societies, and clubs across India.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-50 mr-50 mt-20">
        {[
          {
            title: 'Admin',
            desc: 'Create organizations, assign committees, and oversee operations.',
            link: '/admin',
          },
          {
            title: 'Election Committee',
            desc: 'Manage elections, approve candidates, and monitor progress.',
            link: '/committee',
          },
          {
            title: 'Candidates',
            desc: 'Register, upload documents, and manage your nomination.',
            link: '/candidates',
          },
          {
            title: 'Voters',
            desc: 'Register securely and cast your vote within the set timeframe.',
            link: '/voters',
          },
        ].map((role, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{role.title}</h2>
              <p className="text-gray-600 mb-4">{role.desc}</p>
            </div>
            <Link to={role.link} className="w-full">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-300">
                Go to {role.title}
              </button>
            </Link>
          </div>
        ))}
      </section>

      <footer className="text-center mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Election Management Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
