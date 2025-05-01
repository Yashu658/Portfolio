import React from "react";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <div className="flex gap-5 px-4 py-4 ">
            <div></div>
          </div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded mb-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-6"
              required
            />
            <button className="w-full bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition">
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Forgot your password?{" "}
            <Link to="/Resetpassword" className="text-blue-600 hover:underline">
              Reset password
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
