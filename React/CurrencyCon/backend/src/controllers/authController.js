import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { genAuthToken } from "../config/jwtAuth.js";
import nodemailer from "nodemailer";
import Admin from "../models/adminModel.js";
// ===================== USER LOGIN =====================
export const userLogin = async (req, res) => {
  try {
    console.log("Login attempt with:", { emailID: req.body.emailID });
    const {emailID, password } = req.body;

    if (!emailID || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Convert email to lowercase for case-insensitive comparison
    const normalizedEmail = emailID.toLowerCase();

    // First check Admin database with emailID
    const admin = await Admin.findOne({ 
      emailID: { $regex: new RegExp(`^${normalizedEmail}$`, 'i') }
    });
    console.log("Admin check result:", admin ? "Found" : "Not found");
    
    // If not found in Admin, check User database
    const user = admin || await User.findOne({ 
      "personalDetails.emailID": { $regex: new RegExp(`^${normalizedEmail}$`, 'i') }
    });
    console.log("User check result:", user ? "Found" : "Not found");

    if (!user) {
      console.log("No user found with email:", normalizedEmail);
      return res.status(404).json({ 
        message: "User not found",
        details: "Please check your email address and try again"
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.jobDetail?.password || user.password
    );
    console.log("Password validation:", isPasswordValid ? "Valid" : "Invalid");

    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: "Invalid email or password",
        details: "Please check your password and try again"
      });
    }

    // Check status based on user type
    const status = user.jobDetail?.status || user.status;
    if (status.toLowerCase() !== "active") {
      return res.status(403).json({ 
        message: "User is not active",
        details: "Your account is currently inactive. Please contact your administrator."
      });
    }

    genAuthToken(user._id, res); // sets cookie/header

    // Return user data based on type
    const userData = admin ? {
      id: user._id,
      name: user.name,
      email: user.emailID,
      role: user.role,
      status: user.status,
      image: user.photo
    } : {
      id: user._id,
      name: user.personalDetails.name,
      email: user.personalDetails.emailID,
      role: user.jobDetail.role,
      department: user.jobDetail.department,
      designation: user.jobDetail.designation,
      shiftStartTime: user.jobDetail.shiftStartTime,
      shiftEndTime: user.jobDetail.shiftEndTime,
      weekOff: user.jobDetail.weekOff,
      status: user.jobDetail.status,
      image: user.personalDetails.image,
    };

    res.status(200).json({
      message: "Login successful",
      user: userData
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ 
      message: "Server Error", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// ===================== USER REGISTRATION =====================
export const userRegister = async (req, res) => {
  try {
    const {
      personalDetails,
      emergencyContactDetails,
      educationalDetails = [],
      employmentDetails = [],
      familyDetails = [],
      professionalReferences = [],
      jobDetail,
      isfresher = false,
    } = req.body;

    // Basic null checks
    if (!personalDetails || !jobDetail || !emergencyContactDetails) {
      return res.status(400).json({ message: "Required sections missing." });
    }

    // Destructure personal details
    const {
      name,
      fatherName,
      gender,
      correspondenceAddress,
      permanentAddress,
      altNumber,
      mobile,
      emailID,
      dob,
      maritalStatus,
      panCardNo,
      bloodGroup,
      addharCardNo,
      image = "",
    } = personalDetails;

    // Destructure emergency contact
    const {
      name: emergencyName,
      relation: emergencyRelation,
      contactNo: emergencyContactNo,
    } = emergencyContactDetails;

    // Destructure job details
    let {
      department,
      designation,
      hiringDate,
      salary,
      password,
      role = "Employee",
      status = "Active",
      shiftStartTime = "09:00",
      shiftEndTime = "18:00",
      weekOff = "Sunday",
      bankDetails,
      ManagerName,
      ManagerEmail,
    } = jobDetail;

    if (!bankDetails) {
      return res.status(400).json({ message: "Bank details are required." });
    }

    const { bankName, accountNo, ifscCode, branchAddress } = bankDetails;

    // Validate required personal fields
    if (
      !name || !fatherName || !gender || !correspondenceAddress || !permanentAddress ||
      !mobile || !emailID || !dob || !maritalStatus || !panCardNo ||
      !bloodGroup || !addharCardNo
    ) {
      return res.status(400).json({ message: "Missing required personal details." });
    }

    // Validate emergency contact
    if (!emergencyName || !emergencyRelation || !emergencyContactNo) {
      return res.status(400).json({ message: "Missing emergency contact details." });
    }

    // Validate job + bank + manager fields
    if (
      !department || !designation || !hiringDate || !salary || !bankName ||
      !accountNo || !ifscCode || !branchAddress || !ManagerName || !ManagerEmail
    ) {
      return res.status(400).json({ message: "Missing required job/bank/manager details." });
    }

    // Validate employment details for non-fresher
    if (!isfresher && (!employmentDetails || employmentDetails.length === 0)) {
      return res.status(400).json({ message: "Employment details required for non-freshers." });
    }

    // Check for duplicate entry
    const existingUser = await User.findOne({
      $or: [
        { "personalDetails.emailID": emailID },
        { "personalDetails.panCardNo": panCardNo },
        { "personalDetails.addharCardNo": addharCardNo },
      ],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User with same Email, PAN, or Aadhaar already exists.",
      });
    }

    // Generate password if not provided
    let generatedPassword = password;
    if (!password) {
      const fullName = name?.trim();
      const birthYear = dob?.split("-")[0];
      if (!fullName || !birthYear) {
        return res.status(400).json({
          message: "Password is missing and cannot be generated (name or dob missing).",
        });
      }
      const firstName = fullName.split(" ")[0];
      generatedPassword = `${firstName}@${birthYear}`;
    }

    const hashedPassword = await bcrypt.hash(generatedPassword, 10);

    // Create new user
    const newUser = new User({
      personalDetails: {
        name,
        fatherName,
        gender,
        correspondenceAddress,
        permanentAddress,
        altNumber,
        mobile,
        emailID,
        dob,
        maritalStatus,
        panCardNo,
        bloodGroup,
        addharCardNo,
        image,
      },
      emergencyContactDetails: {
        name: emergencyName,
        relation: emergencyRelation,
        contactNo: emergencyContactNo,
      },
      educationalDetails,
      isfresher,
      employmentDetails,
      familyDetails,
      professionalReferences,
      jobDetail: {
        department,
        designation,
        hiringDate,
        salary,
        password: hashedPassword,
        role,
        status,
        shiftStartTime,
        shiftEndTime,
        weekOff,
        ManagerName,
        ManagerEmail,
        bankDetails: {
          bankName,
          accountNo,
          ifscCode,
          branchAddress,
        },
      },
    });

    await newUser.save();

    // Send welcome email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"HR Team" <${process.env.MAIL_USER}>`,
      to: emailID,
      subject: "Welcome to the Company - Login Credentials",
      html: `
        <h3>Dear ${name},</h3>
        <p>Your employee account has been successfully created.</p>
        <p><strong>Login Credentials:</strong></p>
        <ul>
          <li><strong>Email:</strong> ${emailID}</li>
          <li><strong>Password:</strong> ${generatedPassword}</li>
        </ul>
        <p>Please change your password after your first login.</p>
        <br/>
        <p>Regards,<br/>HR Team</p>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.warn("User created, but email not sent:", err.message);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.personalDetails.name,
        email: newUser.personalDetails.emailID,
        role: newUser.jobDetail.role,
        status: newUser.jobDetail.status,
        defaultPassword: generatedPassword, // Only for dev/testing
      },
    });
  } catch (error) {
    console.error("Registration Error:", error.message);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Duplicate entry for Email, PAN, or Aadhaar.",
        fields: error.keyValue,
      });
    }

    return res.status(500).json({
      message: "Server error during registration",
      error: error.message,
    });
  }
};

// ===================== USER LOGOUT =====================
export const userLogout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout Error:", error.message);
    res
      .status(500)
      .json({ message: "Server error during logout", error: error.message });
  }
};