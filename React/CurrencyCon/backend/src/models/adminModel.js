import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailID: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "Admin",
      enum: ["Admin"],
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
  },
  {
    timestamps: true,
  }
);

// Drop existing indexes
adminSchema.indexes().forEach((index) => {
  adminSchema.index(index[0], { unique: false });
});

// Create new index on emailID
adminSchema.index({ emailID: 1 }, { unique: true });

const Admin = mongoose.model("Admin", adminSchema);

// Drop any existing indexes in the database
Admin.collection.dropIndexes().catch((err) => {
  console.log("Error dropping indexes:", err);
});

export default Admin;