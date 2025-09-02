import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";




// Admin Register Controller
export const registerAdmin = async (req, res) => {
  try {
    const { name, emailID, password, phone, address, photo } = req.body;

    // Check for required fields
    if (!name || !emailID || !password || !phone || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailID)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ emailID: emailID.toLowerCase() });
    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const newAdmin = new Admin({
      name,
      emailID: emailID.toLowerCase(),
      password: hashedPassword,
      phone,
      address,
      photo: photo || "",
      role: "Admin",
      status: "Active"
    });

    await newAdmin.save();

    return res.status(201).json({
      message: "Admin registered successfully.",
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.emailID,
        role: newAdmin.role,
        status: newAdmin.status,
      },
    });
  } catch (error) {
    console.error("Register Admin Error:", error.message);
    
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already exists." });
    }

    return res.status(500).json({
      message: "Server error while registering admin",
      error: error.message,
    });
  }
};


// Get admin profile
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching admin profile",
      error: error.message,
    });
  }
};

// Update admin profile
export const updateAdminProfile = async (req, res) => {
  try {
    const { name, phone, address, photo } = req.body;
    const admin = await Admin.findById(req.admin.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Update fields
    admin.name = name || admin.name;
    admin.phone = phone || admin.phone;
    admin.address = address || admin.address;
    admin.photo = photo || admin.photo;

    await admin.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.emailID,
        phone: admin.phone,
        address: admin.address,
        photo: admin.photo,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating profile",
      error: error.message,
    });
  }
};

// Change password
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error changing password",
      error: error.message,
    });
  }
};