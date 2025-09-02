import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";

export const userProtect = async (req, res, next) => {
  try {
    let token;

    // 1. Try to get token from Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // 2. Fallback to cookies
    else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, please login" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Try to find user in Admin collection first
    const admin = await Admin.findById(decoded.id);
    if (admin) {
      req.admin = admin;
      return next();
    }

    // If not admin, try User collection
    const user = await User.findById(decoded.id);
    if (user) {
      req.user = user;
      return next();
    }

    return res.status(401).json({ message: "Not authorized, user not found" });
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};