import React from "react";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "Bachelor of Science (B.Sc)",
    institution: "Government Motilal Vigyan Mahavidyalaya, Bhopal (Madhya Pradesh)",
    specialization: "Electronics Equipment",
  },
  {
    title: "Master of Science (M.Sc)",
    institution: "Barkatullah Vishwavidyalaya, Bhopal (Madhya Pradesh)",
    specialization: "Electronics",
  },
  {
    title: "PGDCA",
    institution: "Makhanlal Chaturvedi Rashtriya Patrakarita Vishwavidyalaya, Bhopal (Madhya Pradesh)",
    specialization: "Post Graduate Diploma in Computer Applications",
  },
  {
    title: "Certified Web Developer",
    institution: "Raj Institute of Coding & Robotics (RICR)",
    specialization: "Completed an intensive web development course covering HTML, CSS, JavaScript, React, and Node.js.",
  },
];

const Qualification = () => {
  return (
    <section className="pt-20 flex justify-center" >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-4 border-blue-500 pb-3 mb-6 text-center">
          🎓 Qualifications
        </h2>
        <div className="space-y-6">
          {qualifications.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-gray-700 mt-2 italic">{item.specialization}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Qualification;