import React, { useState } from "react";
import { Link } from "react-router-dom";
const CandidateRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateInput = () => {
    //if (!/^[A-Za-z\s]+$/.test(fn))
    let error = "";

    if (!/^[A-Za-z][A-Za-z\s\-]{1,49}$/.test(formData.name)) {
      //Name
      error = "Please enter a valid name";
      return error;
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|in|org|net|edu)$/.test(
        formData.email
      )
    ) {
      //Email
      error = "Please enter a Valid Email address ";
      return error;
    }
    if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(formData.phone)) {
      //Number
      error = "Please enter a Valid 10-digit Mobile Number ";
      return error;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateInput();
    setError(validate);
    if (error) {
      return;
    }
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Candidate Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-4"
              required
            />
            <input
              type="Phone"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-4"
              required
            />
            <input
              type="id"
              name="id"
              placeholder="ID proof"
              className="w-full p-3 border rounded mb-6"
              required
            />
            <button className="w-full bg-green-600 text-white p-3 rounded-2xl hover:bg-green-700 transition">
              Register
            </button>
          </form>
          {error ? (
            <p className="mt-2 text-center text-sm text-red-600">{error}</p>
          ) : (
            <p></p>
          )}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/CandidateLogin"
              className="text-blue-600 hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CandidateRegister;
