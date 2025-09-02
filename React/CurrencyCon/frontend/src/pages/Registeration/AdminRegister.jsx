import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
  FaImage,
  FaEye,
  FaEyeSlash,
  FaBuilding,
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUserTie,
} from "react-icons/fa";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4500/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // For debugging
    console.log("Request Config:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    if (error.code === "ERR_NETWORK") {
      toast.error("Cannot connect to server. Please check if the server is running.");
    }
    return Promise.reject(error);
  }
);

const AdminRegister = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    emailID: "",
    password: "",
    phone: "",
    address: "",
    photo: "",
    role: "Admin",
    status: "Active"
  });

  const [errors, setErrors] = useState({});

  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailID) {
      newErrors.emailID = "Email is required";
    } else if (!emailRegex.test(formData.emailID)) {
      newErrors.emailID = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFormData(prev => ({
          ...prev,
          photo: base64String
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await api.post("/admin/register", formData);

      if (response.status === 201) {
        toast.success("Admin registered successfully!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.code === "ERR_NETWORK") {
        toast.error("Cannot connect to server. Please check if the server is running.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full p-2 mb-2">
            <FaUser className="text-white text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Admin Registration</h2>
          <p className="text-gray-500 text-sm mt-1">Create your admin account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                name="name"
                type="text"
                required
                className={`pl-10 pr-3 py-2 w-full rounded-lg border ${
                  errors.name ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-gray-400" />
              </span>
              <input
                name="emailID"
                type="email"
                required
                className={`pl-10 pr-3 py-2 w-full rounded-lg border ${
                  errors.emailID ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition`}
                placeholder="Enter your email"
                value={formData.emailID}
                onChange={handleChange}
              />
            </div>
            {errors.emailID && <p className="text-red-500 text-xs mt-1">{errors.emailID}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className={`pl-10 pr-10 py-2 w-full rounded-lg border ${
                  errors.password ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition`}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaPhone className="text-gray-400" />
              </span>
              <input
                name="phone"
                type="tel"
                required
                className={`pl-10 pr-3 py-2 w-full rounded-lg border ${
                  errors.phone ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition`}
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-start pt-3 pl-3">
                <FaMapMarkerAlt className="text-gray-400" />
              </span>
              <textarea
                name="address"
                required
                className={`pl-10 pr-3 py-2 w-full rounded-lg border ${
                  errors.address ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition`}
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
              />
            </div>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="flex items-center px-3 py-2 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-200 hover:bg-indigo-100 transition"
              >
                <FaImage className="mr-2" />
                Upload
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
              )}
            </div>
          </div>

          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-medium ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700"
              } transition duration-200`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          
          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-indigo-600 hover:underline font-medium"
              >
                Login here
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;