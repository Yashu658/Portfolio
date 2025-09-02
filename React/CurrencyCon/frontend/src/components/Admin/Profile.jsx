import React, { useEffect, useState } from "react";
import axios from "../../config/api";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/admin/profile");
        if (response.data?.data) {
          setAdmin(response.data.data);
          localStorage.setItem("adminData", JSON.stringify(response.data.data));
        } else {
          throw new Error("Admin data not found");
        }
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load profile. Please login again."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md p-6 bg-red-50 rounded-lg shadow">
          <h3 className="text-lg font-medium text-red-800">
            Error Loading Profile
          </h3>
          <p className="mt-2 text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md p-6 bg-yellow-50 rounded-lg shadow">
          <h3 className="text-lg font-medium text-yellow-800">
            Profile Unavailable
          </h3>
          <p className="mt-2 text-yellow-600">Admin data not available</p>
        </div>
      </div>
    );
  }

  // Helper component for consistent info cards
  const InfoCard = ({ icon, title, value, className = "" }) => (
    <div className={`p-4 bg-white rounded-lg border border-gray-200 ${className}`}>
      <div className="flex items-center space-x-3 text-gray-600">
        <div className="text-blue-500">{icon}</div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="mt-1 text-gray-800 font-medium">{value || "-"}</p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center gap-4">
          <img
            src={admin.photo || "/default-avatar.png"}
            alt={admin.name}
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {admin.name}
            </h1>
            <p className="text-blue-600 font-bold mt-1">{admin.role}</p>
            <p className="text-gray-500 text-sm">{admin.status}</p>
          </div>
        </div>
      </div>

      {/* Admin Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard icon={<FiMail size={18} />} title="Email" value={admin.emailID} />
        <InfoCard icon={<FiPhone size={18} />} title="Phone" value={admin.phone} />
        <InfoCard icon={<FaMapMarkerAlt size={18} />} title="Address" value={admin.address} />
      </div>
    </div>
  );
};

export default Profile; 