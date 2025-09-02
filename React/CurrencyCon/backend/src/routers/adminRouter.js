import express from "express";
import {
  registerAdmin,
  getAdminProfile,
  updateAdminProfile,
  changePassword,
} from "../controllers/adminController.js";
import { userProtect } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerAdmin);

// Protected routes (require authentication)
router.get("/profile", userProtect, getAdminProfile);
router.put("/profile", userProtect, updateAdminProfile);
router.put("/change-password", userProtect, changePassword);

export default router;