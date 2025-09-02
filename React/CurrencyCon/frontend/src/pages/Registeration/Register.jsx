import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/api"
import Step1PersonalDetails from "./components/Step1PersonalDetails";
import Step2EducationEmployment from "./components/Step2EducationEmployment";
import Step3ReferencesFamily from "./components/Step3ReferencesFamily";
import Step4JobDetails from "./components/Step4JobDetails";
import { toast } from "react-hot-toast";



const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  // Add country codes array
  const countryCodes = [
    { value: "+91", label: "IN (+91)" },     // India
    { value: "+977", label: "NP (+977)" },   // Nepal
    { value: "+1-US", label: "US (+1)" },    // United States
    { value: "+1-CA", label: "CA (+1)" },    // Canada
    { value: "+44", label: "UK (+44)" },     // United Kingdom
    { value: "+61", label: "AU (+61)" },     // Australia
    { value: "+86", label: "CN (+86)" },     // China
    { value: "+81", label: "JP (+81)" },     // Japan
    { value: "+49", label: "DE (+49)" },     // Germany
    { value: "+33", label: "FR (+33)" },     // France
    { value: "+39", label: "IT (+39)" },     // Italy
    { value: "+34", label: "ES (+34)" },     // Spain
    { value: "+7", label: "RU (+7)" },       // Russia
    { value: "+82", label: "KR (+82)" },     // South Korea
    { value: "+65", label: "SG (+65)" },     // Singapore
    { value: "+60", label: "MY (+60)" },     // Malaysia
    { value: "+62", label: "ID (+62)" },     // Indonesia
    { value: "+63", label: "PH (+63)" },     // Philippines
    { value: "+66", label: "TH (+66)" },     // Thailand
    { value: "+92", label: "PK (+92)" },     // Pakistan
    { value: "+880", label: "BD (+880)" },   // Bangladesh
    { value: "+94", label: "LK (+94)" },     // Sri Lanka
    { value: "+90", label: "TR (+90)" },     // Turkey
    { value: "+20", label: "EG (+20)" },     // Egypt
    { value: "+971", label: "AE (+971)" },   // UAE
    { value: "+966", label: "SA (+966)" },   // Saudi Arabia
    { value: "+254", label: "KE (+254)" },   // Kenya
    { value: "+27", label: "ZA (+27)" },     // South Africa
    { value: "+598", label: "UY (+598)" },   // Uruguay
  ];
  

  const [formData, setFormData] = useState({
    personalDetails: {
      name: "",
      fatherName: "",
      gender: "",
      correspondenceAddress: "",
      permanentAddress: "",
      altNumber: "",
      mobile: "",
      emailID: "",
      dob: "",
      maritalStatus: "",
      panCardNo: "",
      bloodGroup: "",
      addharCardNo: "",
      image: ""
    },
    emergencyContactDetails: {
      name: "",
      relation: "",
      contactNo: "",
      contactNoCountryCode: "+91"
    },
    educationalDetails: [{
      degree: "",
      university: "",
      from: "",
      to: "",
      percentageOrGrade: "",
      specialization: ""
    }],
    employmentDetails: [{
      organization: "",
      designation: "",
      periodOfService: { from: "", to: "" },
      annualCTC: "",
      reasonForLeaving: ""
    }],
    familyDetails: [{
      name: "",
      relation: "",
      occupation: "",
      phoneNo: "",
      phoneNoCountryCode: "+91"
    }],
    professionalReferences: [{
      name: "",
      contactNo: "",
      contactNoCountryCode: "+91",
      organization: "",
      designation: ""
    }],
    isfresher: false,
    jobDetail: {
      department: "",
      designation: "",
      hiringDate: "",
      salary: "",
      password: "",
      role: "Employee",
      status: "Active",
      shiftStartTime: "09:00",
      shiftEndTime: "18:00",
      weekOff: "Sunday",
      bankDetails: {
        bankName: "",
        accountNo: "",
        ifscCode: "",
        branchAddress: ""
      },
      ManagerName: "",
      ManagerEmail: ""
    }
  });

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      const { personalDetails } = formData;
      if (!personalDetails.name.trim())
        newErrors.name = "Full Name is required";
      if (!personalDetails.fatherName.trim())
        newErrors.fatherName = "Father's Name is required";
      if (!personalDetails.gender) 
        newErrors.gender = "Gender is required";
      if (!personalDetails.dob) 
        newErrors.dob = "Date of Birth is required";
      if (!personalDetails.maritalStatus) {
        newErrors.maritalStatus = "Marital Status is required";
      } else if (!["single", "married", "divorced", "widowed"].includes(personalDetails.maritalStatus.toLowerCase())) {
        newErrors.maritalStatus = "Invalid Marital Status. Must be one of: single, married, divorced, widowed";
      }
      if (!personalDetails.bloodGroup) {
        newErrors.bloodGroup = "Blood Group is required";
      } else if (!["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].includes(personalDetails.bloodGroup)) {
        newErrors.bloodGroup = "Invalid Blood Group. Must be one of: A+, A-, B+, B-, AB+, AB-, O+, O-";
      }
      if (!personalDetails.panCardNo) {
        newErrors.panCardNo = "PAN Card No is required";
      } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(personalDetails.panCardNo)) {
        newErrors.panCardNo = "Invalid PAN Card format (e.g. ABCDE1234F)";
      }
      
      if (!personalDetails.mobile) {
        newErrors.mobile = "Mobile Number is required";
      } else if (!/^[0-9]{10}$/.test(personalDetails.mobile)) {
        newErrors.mobile = "Invalid Mobile Number (10 digits required)";
      }
      if (!personalDetails.emailID) {
        newErrors.emailID = "Email ID is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails.emailID)) {
        newErrors.emailID = "Invalid Email format";
      }
      if (!personalDetails.permanentAddress.trim())
        newErrors.permanentAddress = "Permanent Address is required";
      if (!personalDetails.correspondenceAddress.trim())
        newErrors.correspondenceAddress = "Correspondence Address is required";
      if (!personalDetails.addharCardNo) {
        newErrors.addharCardNo = "Aadhaar Card No is required";
      } else if (!/^\d{12}$/.test(personalDetails.addharCardNo)) {
        newErrors.addharCardNo = "Invalid Aadhaar Number (12 digits required)";
      }
    } else if (step === 2) {
      // Educational Details validation
      formData.educationalDetails.forEach((edu, index) => {
        if (!edu.degree)
          newErrors[`eduDegree_${index}`] = "Degree is required";
        if (!edu.university)
          newErrors[`eduUniversity_${index}`] = "University is required";
        if (!edu.from?.trim())
          newErrors[`eduFrom_${index}`] = "From date is required";
        if (!edu.to?.trim())
          newErrors[`eduTo_${index}`] = "To date is required";
        if (!edu.percentageOrGrade?.trim())
          newErrors[`eduGrade_${index}`] = "Percentage/Grade is required";
      });

      // Employment Details validation (only if not fresher)
      if (!formData.isfresher) {
        if (!formData.employmentDetails || formData.employmentDetails.length === 0) {
          newErrors.employmentDetails = "Employment details are required for non-freshers";
        } else {
          formData.employmentDetails.forEach((emp, index) => {
            if (!emp.organization?.trim())
              newErrors[`empOrg_${index}`] = "Organization is required";
            if (!emp.designation?.trim())
              newErrors[`empDesignation_${index}`] = "Designation is required";
            if (!emp.periodOfService?.from?.trim())
              newErrors[`empFrom_${index}`] = "From date is required";
            if (!emp.periodOfService?.to?.trim())
              newErrors[`empTo_${index}`] = "To date is required";
            if (!emp.annualCTC?.trim())
              newErrors[`empCTC_${index}`] = "Annual CTC is required";
            if (!emp.reasonForLeaving?.trim())
              newErrors[`empReason_${index}`] = "Reason for Leaving is required";
          });
        }
      }
    } else if (step === 3) {
      const { emergencyContactDetails, familyDetails } = formData;
      
      // Emergency Contact validation
      if (!emergencyContactDetails.name.trim())
        newErrors.emergencyName = "Emergency Contact Name is required";
      if (!emergencyContactDetails.relation.trim())
        newErrors.emergencyRelation = "Relation is required";
      if (!emergencyContactDetails.contactNo) {
        newErrors.emergencyContact = "Contact Number is required";
      } else if (!/^[0-9]{10}$/.test(emergencyContactDetails.contactNo)) {
        newErrors.emergencyContact = "Invalid Contact Number (10 digits required)";
      }

      // Family Details validation
      familyDetails.forEach((member, index) => {
        if (!member.name?.trim())
          newErrors[`familyName_${index}`] = "Family Member Name is required";
        if (!member.relation?.trim())
          newErrors[`familyRelation_${index}`] = "Relation is required";
      });
    } else if (step === 4) {
      const { jobDetail } = formData;
      if (!jobDetail.department.trim())
        newErrors.department = "Department is required";
      if (!jobDetail.designation.trim())
        newErrors.designation = "Designation is required";
      if (!jobDetail.hiringDate)
        newErrors.hiringDate = "Hiring Date is required";

      if (!jobDetail.salary) {
        newErrors.salary = "Salary is required";
      } else if (!/^\d+$/.test(jobDetail.salary)) {
        newErrors.salary = "Salary must be a number";
      }

      // Password validation (optional)
      if (jobDetail.password || jobDetail.confirmPassword) {
        if (jobDetail.password && jobDetail.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        }
        if (jobDetail.password !== jobDetail.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        }
      }

      if (!jobDetail.bankDetails.bankName)
        newErrors.bankName = "Bank Name is required";

      if (!jobDetail.bankDetails.accountNo) {
        newErrors.accountNo = "Account No is required";
      } else if (!/^\d+$/.test(jobDetail.bankDetails.accountNo)) {
        newErrors.accountNo = "Account No must contain only numbers";
      }

      if (!jobDetail.bankDetails.ifscCode) {
        newErrors.ifscCode = "IFSC Code is required";
      } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(jobDetail.bankDetails.ifscCode)) {
        newErrors.ifscCode = "Invalid IFSC Code format";
      }

      if (!jobDetail.ManagerName.trim())
        newErrors.ManagerName = "Manager Name is required";
      if (!jobDetail.ManagerEmail.trim())
        newErrors.ManagerEmail = "Manager Email is required";

      if (!jobDetail.bankDetails.branchAddress.trim())
        newErrors.branchAddress = "Branch Address is required";

      if (!["HOD", "Employee"].includes(jobDetail.role)) {
        newErrors.role = "Invalid Role. Must be either HOD or Employee";
      }

      if (!["Active", "Suspended", "Terminated", "Retired", "Resigned"].includes(jobDetail.status)) {
        newErrors.status = "Invalid Status. Must be one of: Active, Suspended, Terminated, Retired, Resigned";
      }

      if (!["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].includes(jobDetail.weekOff)) {
        newErrors.weekOff = "Invalid Week Off. Must be a valid day of the week";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        correspondenceAddress: checked
          ? prev.personalDetails.permanentAddress
          : prev.personalDetails.correspondenceAddress,
      },
    }));
  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    if (name.endsWith('CountryCode')) {
      setFormData((prev) => ({
        ...prev,
        personalDetails: {
          ...prev.personalDetails,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        personalDetails: {
          ...prev.personalDetails,
          [name]: value,
        },
      }));

      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    if (name.endsWith('CountryCode')) {
      setFormData((prev) => ({
        ...prev,
        emergencyContactDetails: {
          ...prev.emergencyContactDetails,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        emergencyContactDetails: {
          ...prev.emergencyContactDetails,
          [name]: value,
        },
      }));

      const errorKey = `emergency${name.charAt(0).toUpperCase() + name.slice(1)}`;
      if (errors[errorKey]) {
        setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
      }
    }
  };

  const handleJobDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      jobDetail: {
        ...prev.jobDetail,
        [name]: value,
      },
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      jobDetail: {
        ...prev.jobDetail,
        bankDetails: {
          ...prev.jobDetail.bankDetails,
          [name]: value,
        },
      },
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleArrayFieldChange = (field, index, e) => {
    const { name, value } = e.target;
    const updatedArray = [...formData[field]];

    if (name.endsWith('CountryCode')) {
      updatedArray[index] = {
        ...updatedArray[index],
        [name]: value,
      };
    } else if (name.includes(".")) {
      const [parent, child] = name.split(".");
      updatedArray[index] = {
        ...updatedArray[index],
        [parent]: {
          ...updatedArray[index][parent],
          [child]: value,
        },
      };
    } else {
      updatedArray[index] = {
        ...updatedArray[index],
        [name]: value,
      };
    }

    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));

    const fieldPrefix = field.substring(0, 3);
    const errorKey = `${fieldPrefix}${
      name.charAt(0).toUpperCase() + name.slice(1)
    }_${index}`;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
    }
  };

  const addArrayField = (field, template) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], template],
    }));
  };

  const removeArrayField = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));

    const fieldPrefix = field.substring(0, 3);
    setErrors((prev) => {
      const newErrors = { ...prev };
      Object.keys(newErrors).forEach((key) => {
        if (key.startsWith(fieldPrefix) && key.endsWith(`_${index}`)) {
          delete newErrors[key];
        }
      });
      return newErrors;
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setErrors((prev) => ({
          ...prev,
          image: "Please select an image file",
        }));
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image size should be less than 2MB",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          personalDetails: {
            ...prev.personalDetails,
            image: reader.result,
          },
        }));

        if (errors.image) {
          setErrors((prev) => ({ ...prev, image: undefined }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFresherCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      isfresher: checked,
      employmentDetails: checked ? [] : [{
        organization: "",
        designation: "",
        periodOfService: { from: "", to: "" },
        annualCTC: "",
        reasonForLeaving: ""
      }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate all required fields
    const newErrors = {};
    
    // Personal Details Validation
    const requiredPersonalFields = {
      name: "Name",
      fatherName: "Father's name",
      gender: "Gender",
      correspondenceAddress: "Correspondence address",
      permanentAddress: "Permanent address",
      mobile: "Mobile number",
      emailID: "Email",
      dob: "Date of birth",
      maritalStatus: "Marital status",
      panCardNo: "PAN card number",
      bloodGroup: "Blood group",
      addharCardNo: "Aadhaar card number"
    };

    Object.entries(requiredPersonalFields).forEach(([field, label]) => {
      if (!formData.personalDetails[field]) {
        newErrors[field] = `${label} is required`;
        toast.error(`${label} is required`);
      }
    });

    // Validate marital status enum
    const validMaritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
    if (formData.personalDetails.maritalStatus && 
        !validMaritalStatuses.includes(formData.personalDetails.maritalStatus)) {
      newErrors.maritalStatus = "Invalid marital status";
      toast.error("Invalid marital status. Must be one of: Single, Married, Divorced, Widowed");
    }

    // Validate blood group enum
    const validBloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    if (formData.personalDetails.bloodGroup && 
        !validBloodGroups.includes(formData.personalDetails.bloodGroup)) {
      newErrors.bloodGroup = "Invalid blood group";
      toast.error("Invalid blood group. Must be one of: A+, A-, B+, B-, AB+, AB-, O+, O-");
    }

    // Emergency Contact Validation
    if (!formData.emergencyContactDetails.name) {
      newErrors.emergencyName = "Emergency contact name is required";
      toast.error("Emergency contact name is required");
    }
    if (!formData.emergencyContactDetails.relation) {
      newErrors.emergencyRelation = "Emergency contact relation is required";
      toast.error("Emergency contact relation is required");
    }
    if (!formData.emergencyContactDetails.contactNo) {
      newErrors.emergencyContact = "Emergency contact number is required";
      toast.error("Emergency contact number is required");
    }

    // Educational Details Validation
    if (formData.educationalDetails.length === 0) {
      newErrors.educationalDetails = "At least one educational detail is required";
      toast.error("At least one educational detail is required");
    } else {
      formData.educationalDetails.forEach((edu, index) => {
        if (!edu.degree) {
          newErrors[`eduDegree_${index}`] = "Degree is required";
          toast.error(`Degree is required for Education #${index + 1}`);
        }
        if (!edu.university) {
          newErrors[`eduUniversity_${index}`] = "University is required";
          toast.error(`University is required for Education #${index + 1}`);
        }
        if (!edu.from) {
          newErrors[`eduFrom_${index}`] = "From date is required";
          toast.error(`From date is required for Education #${index + 1}`);
        }
        if (!edu.to) {
          newErrors[`eduTo_${index}`] = "To date is required";
          toast.error(`To date is required for Education #${index + 1}`);
        }
        if (!edu.percentageOrGrade) {
          newErrors[`eduGrade_${index}`] = "Percentage/Grade is required";
          toast.error(`Percentage/Grade is required for Education #${index + 1}`);
        }
      });
    }

    // Employment Details Validation
    if (!formData.isfresher) {
      if (!formData.employmentDetails || formData.employmentDetails.length === 0) {
        newErrors.employmentDetails = "Employment details are required for non-freshers";
        toast.error("Employment details are required for non-freshers");
      } else {
        formData.employmentDetails.forEach((emp, index) => {
          if (!emp.organization) {
            newErrors[`empOrg_${index}`] = "Organization is required";
            toast.error(`Organization is required for Employment #${index + 1}`);
          }
          if (!emp.designation) {
            newErrors[`empDesignation_${index}`] = "Designation is required";
            toast.error(`Designation is required for Employment #${index + 1}`);
          }
          if (!emp.periodOfService?.from) {
            newErrors[`empFrom_${index}`] = "From date is required";
            toast.error(`From date is required for Employment #${index + 1}`);
          }
          if (!emp.periodOfService?.to) {
            newErrors[`empTo_${index}`] = "To date is required";
            toast.error(`To date is required for Employment #${index + 1}`);
          }
          if (!emp.annualCTC) {
            newErrors[`empCTC_${index}`] = "Annual CTC is required";
            toast.error(`Annual CTC is required for Employment #${index + 1}`);
          }
          if (!emp.reasonForLeaving) {
            newErrors[`empReason_${index}`] = "Reason for leaving is required";
            toast.error(`Reason for leaving is required for Employment #${index + 1}`);
          }
        });
      }
    }

    // Family Details Validation
    if (formData.familyDetails.length === 0) {
      newErrors.familyDetails = "At least one family detail is required";
      toast.error("At least one family detail is required");
    } else {
      formData.familyDetails.forEach((family, index) => {
        if (!family.name) {
          newErrors[`familyName_${index}`] = "Name is required";
          toast.error(`Name is required for Family Member #${index + 1}`);
        }
        if (!family.relation) {
          newErrors[`familyRelation_${index}`] = "Relation is required";
          toast.error(`Relation is required for Family Member #${index + 1}`);
        }
      });
    }

    // Job Details Validation
    const requiredJobFields = {
      department: "Department",
      designation: "Designation",
      hiringDate: "Hiring date",
      salary: "Salary",
      ManagerName: "Manager name",
      ManagerEmail: "Manager email"
    };

    Object.entries(requiredJobFields).forEach(([field, label]) => {
      if (!formData.jobDetail[field]) {
        newErrors[field] = `${label} is required`;
        toast.error(`${label} is required`);
      }
    });

    // Password validation 
    if (formData.jobDetail.password || formData.jobDetail.confirmPassword) {
      if (formData.jobDetail.password && formData.jobDetail.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
        toast.error("Password must be at least 6 characters");
      }
      if (formData.jobDetail.password !== formData.jobDetail.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        toast.error("Passwords do not match");
      }
    }

    // Bank Details Validation
    const requiredBankFields = {
      bankName: "Bank name",
      accountNo: "Account number",
      ifscCode: "IFSC code",
      branchAddress: "Branch address"
    };

    Object.entries(requiredBankFields).forEach(([field, label]) => {
      if (!formData.jobDetail.bankDetails[field]) {
        newErrors[field] = `${label} is required`;
        toast.error(`${label} is required`);
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Format the data before sending
      const formattedData = {
        ...formData,
        isfresher: Boolean(formData.isfresher),
        employmentDetails: formData.isfresher ? [] : formData.employmentDetails.map(emp => ({
          organization: emp.organization || "",
          designation: emp.designation || "",
          periodOfService: {
            from: emp.periodOfService?.from || "",
            to: emp.periodOfService?.to || ""
          },
          annualCTC: emp.annualCTC || "",
          reasonForLeaving: emp.reasonForLeaving || ""
        })),
        professionalReferences: formData.professionalReferences.map(ref => ({
          name: ref.name || "",
          organization: ref.organization || "",
          designation: ref.designation || "",
          contactNo: ref.contactNo || ""
        }))
      };

      console.log("Sending registration data:", formattedData);

      const response = await api.post("/auth/register", formattedData);
      
      if (response.status === 201) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response) {
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);
      }
      toast.error(
        err.response?.data?.message ||
        "An error occurred during registration. Please check the console for details."
      );
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">
            Employee Registration
          </h1>
          <div className="flex mt-2">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={`step-progress-${stepNumber}`}
                className={`flex-1 h-2 mx-1 rounded-full ${
                  step >= stepNumber ? "bg-white" : "bg-blue-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mx-6 mt-4">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 && (
            <Step1PersonalDetails
              key="step1-personal"
              formData={formData}
              errors={errors}
              handlePersonalDetailsChange={handlePersonalDetailsChange}
              handleCheckboxChange={handleCheckboxChange}
              handleImageUpload={handleImageUpload}
              countryCodes={countryCodes}
            />
          )}

          {step === 2 && (
            <Step2EducationEmployment
              key="step2-education"
              formData={formData}
              errors={errors}
              handleArrayFieldChange={handleArrayFieldChange}
              addArrayField={addArrayField}
              removeArrayField={removeArrayField}
              handleCheckboxChange={handleFresherCheckboxChange}
            />
          )}

          {step === 3 && (
            <Step3ReferencesFamily
              key="step3-references"
              formData={formData}
              errors={errors}
              handleEmergencyContactChange={handleEmergencyContactChange}
              handleArrayFieldChange={handleArrayFieldChange}
              addArrayField={addArrayField}
              removeArrayField={removeArrayField}
              countryCodes={countryCodes}
            />
          )}

          {step === 4 && (
            <Step4JobDetails
              key="step4-job"
              formData={formData}
              errors={errors}
              handleJobDetailsChange={handleJobDetailsChange}
              handleBankDetailsChange={handleBankDetailsChange}
            />
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Previous
              </button>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;