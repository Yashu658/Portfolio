import mongoose from "mongoose";

// Sub-schema for employmentDetails
const employmentDetailsSchema = new mongoose.Schema({
  organization: { type: String },
  designation: { type: String },
  periodOfService: {
    from: { type: String },
    to: { type: String },
  },
  reasonForLeaving: { type: String },
  annualCTC: { type: String },
});

const userSchema = new mongoose.Schema(
  {
    personalDetails: {
      name: {
        type: String,
        required: true,
      },
      fatherName: {
        type: String,
        required: true,
      },
      gender: { type: String, required: true },
      correspondenceAddress: { type: String, required: true },
      permanentAddress: { type: String, required: true },
      altNumber: { type: String },
      mobile: { type: String, required: true },
      emailID: { type: String, required: true, unique: true },
      dob: { type: String, required: true },
      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Divorced", "Widowed"],
        required: true,
      },
      panCardNo: { type: String, required: true, unique: true },
      bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
      },
      addharCardNo: { type: String, required: true, unique: true },
      image: { type: String, default: "" },
    },

    emergencyContactDetails: {
      name: {
        type: String,
        required: true,
      },
      relation: { type: String, required: true },
      contactNo: { type: String, required: true },
    },

    educationalDetails: [
      {
        degree: { type: String, required: true },
        university: { type: String, required: true },
        from: { type: String, required: true },
        to: { type: String, required: true },
        percentageOrGrade: { type: String, required: true },
        specialization: { type: String },
      },
    ],

    isfresher: {
      type: Boolean,
      default: false,
    },

    employmentDetails: {
      type: [employmentDetailsSchema],
      validate: {
        validator: function (value) {
          return this.isfresher || (Array.isArray(value) && value.length > 0);
        },
        message: "Employment details are required for non-freshers.",
      },
    },

    familyDetails: [
      {
        name: {
          type: String,
          required: true,
        },
        relation: { type: String, required: true },
        occupation: { type: String },
        phoneNo: { type: String },
      },
    ],

    professionalReferences: [
      {
        name: {
          type: String,
        },
        organization: { type: String },
        designation: { type: String },
        contactNo: { type: String },
      },
    ],

    jobDetail: {
      department: { type: String, required: true },
      designation: { type: String, required: true },
      hiringDate: { type: String, required: true },
      bankDetails: {
        bankName: { type: String, required: true },
        accountNo: { type: String, required: true },
        ifscCode: { type: String, required: true },
        branchAddress: { type: String, required: true },
      },
      salary: { type: String, required: true },
      password: { type: String, required: true },
      status: {
        type: String,
        enum: ["Active", "Suspended", "Terminated", "Retired", "Resigned"],
        required: true,
        default: "Active",
      },
      role: {
        type: String,
        enum: ["HOD", "Employee"],
        required: true,
        default: "Employee",
      },
      shiftStartTime: { type: String, required: true, default: "09:00" },
      shiftEndTime: { type: String, required: true, default: "18:00" },
      weekOff: {
        type: String,
        enum: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        required: true,
        default: "Sunday",
      },
      ManagerName: {
        type: String,
        required: true,
      },
      ManagerEmail: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Drop the old, incorrect index on startup to fix the E11000 error.
// This runs once and resolves the database issue programmatically.
User.collection.dropIndex("userEmail_1", function(err, result) {
    if (err) {
        // This error is expected if the index doesn't exist, which is okay.
        console.log("Attempted to drop 'userEmail_1' index (it may not exist, which is normal).");
    } else {
        console.log("Successfully dropped legacy index 'userEmail_1'.");
    }
});

export default User;