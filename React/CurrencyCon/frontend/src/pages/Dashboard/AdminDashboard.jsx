import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from '../../config/api.js';
import { 
  FaUsers, 
  FaUserShield, 
  FaCog, 
  FaChartBar, 
  FaDatabase,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaUserCog
} from 'react-icons/fa';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import AdminProfile from "../../components/Admin/Profile.jsx";
import AdminRegister from "../../components/Admin/Register.jsx";
import AdminAnalysis from "../../components/Admin/Analysis.jsx";
import { HiOutlineLogout } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    systemHealth: 'Good',
    securityAlerts: 0
  });
  const [systemLogs, setSystemLogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState("profile");
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample data for charts
  const systemMetricsData = [
    { name: 'Mon', cpu: 65, memory: 75 },
    { name: 'Tue', cpu: 70, memory: 80 },
    { name: 'Wed', cpu: 75, memory: 85 },
    { name: 'Thu', cpu: 80, memory: 90 },
    { name: 'Fri', cpu: 85, memory: 85 },
    { name: 'Sat', cpu: 60, memory: 70 },
  ];

  const userTypeData = [
    { name: 'Admins', value: 5 },
    { name: 'Managers', value: 15 },
    { name: 'Employees', value: 80 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

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

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    
  };

  return (
    <div className="max-w-[90vw] mx-auto mt-8">
      <div className="bg-white mb-6 p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Profile Image & Info */}
          <div className="flex sm:flex-row justify-center items-center gap-4">
            <div>
              <img
                src={admin?.photo || "/default-avatar.png"}
                alt={admin?.name || "Admin"}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="sm:text-left">
              <h2 className="text-2xl font-bold">{admin?.name || "Admin"}</h2>
              <p className="text-gray-600">{admin?.role?.toUpperCase() || "ADMIN"}</p>
              <p className="text-gray-500 text-sm">{admin?.status || "Administrator"}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex sm:flex-row gap-2 items-center justify-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
              onClick={handleLogout}
            >
              <HiOutlineLogout className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-5 border-b border-gray-200">
          <TabButton
            label="Profile"
            icon={<FiUser className="h-5 w-5 mr-2" />}
            isActive={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
          <TabButton
            label="Register"
            icon={<FiUser className="h-5 w-5 mr-2" />}
            isActive={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          />
          <TabButton
            label="Analysis"
            icon={<FiUser className="h-5 w-5 mr-2" />}
            isActive={activeTab === "analysis"}
            onClick={() => setActiveTab("analysis")}
          />
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] max-h-[70vh] overflow-y-auto p-5">
          {activeTab === "profile" && <AdminProfile />}
          {activeTab === "register" && <AdminRegister />}
          {activeTab === "analysis" && <AdminAnalysis />}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 flex items-center border-b-2 cursor-pointer ${
      isActive
        ? "border-blue-500 text-blue-600 font-medium"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default AdminDashboard;