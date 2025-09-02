import React from "react";
import InputField from "./common/InputField";
import SelectField from "./common/SelectField";
import PhoneInputField from "./common/PhoneInputField";

const Step1PersonalDetails = ({
  formData,
  errors,
  handlePersonalDetailsChange,
  handleCheckboxChange,
  handleImageUpload,
  countryCodes,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          name="name"
          value={formData.personalDetails.name}
          onChange={handlePersonalDetailsChange}
          required={true}
          error={errors.name}
        />
        <InputField
          label="Father's Name"
          name="fatherName"
          value={formData.personalDetails.fatherName}
          onChange={handlePersonalDetailsChange}
          required={true}
          error={errors.fatherName}
        />

        <SelectField
          label="Gender"
          name="gender"
          value={formData.personalDetails.gender}
          onChange={handlePersonalDetailsChange}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" },
          ]}
          required={true}
          error={errors.gender}
        />

        <InputField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.personalDetails.dob}
          onChange={handlePersonalDetailsChange}
          required={true}
          error={errors.dob}
        />

        <SelectField
          label="Marital Status"
          name="maritalStatus"
          value={formData.personalDetails.maritalStatus}
          onChange={handlePersonalDetailsChange}
          options={[
            { value: "Single", label: "Single" },
            { value: "Married", label: "Married" },
            { value: "Divorced", label: "Divorced" },
            { value: "Widowed", label: "Widowed" },
          ]}
          required={true}
          error={errors.maritalStatus}
        />

        <SelectField
          label="Blood Group"
          name="bloodGroup"
          value={formData.personalDetails.bloodGroup}
          onChange={handlePersonalDetailsChange}
          options={[
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
          ]}
          required={true}
          error={errors.bloodGroup}
        />

        <InputField
          label="PAN Card No"
          name="panCardNo"
          value={formData.personalDetails.panCardNo}
          onChange={(e) => {
            const value = e.target.value.toUpperCase();
            // Only allow input if it follows PAN pattern
            if (
              value.length <= 10 &&
              /^[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}$/.test(value)
            ) {
              handlePersonalDetailsChange(e);
            }
          }}
          required={true}
          placeholder="ABCDE1234F"
          error={errors.panCardNo}
          style={{ textTransform: "uppercase" }}
          maxLength={10}
          pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
          title="PAN should be in format: ABCDE1234F (5 letters, 4 numbers, 1 letter)"
        />

        <InputField
          label="Aadhaar Card No"
          name="addharCardNo"
          value={formData.personalDetails.addharCardNo}
          onChange={(e) => {
            const value = e.target.value;
            // Only allow numbers and limit to 12 digits
            if (/^\d*$/.test(value) && value.length <= 12) {
              handlePersonalDetailsChange(e);
            }
          }}
          required={true}
          placeholder="123412341234"
          error={errors.addharCardNo}
          type="text"
          inputMode="numeric"
        />

        <PhoneInputField
          label="Mobile Number"
          name="mobile"
          value={formData.personalDetails.mobile}
          countryCodeName="mobileCountryCode"
          countryCodeValue={formData.personalDetails.mobileCountryCode}
          onChange={(e) => {
            const value = e.target.value;
            // Only allow numbers and limit to 12 digits
            if (/^\d*$/.test(value) && value.length <= 10) {
              handlePersonalDetailsChange(e);
            }
          }}
          onCountryCodeChange={handlePersonalDetailsChange}
          required={true}
          placeholder="8602498711"
          error={errors.mobile}
          countryCodes={countryCodes}
        />

        <PhoneInputField
          label="Alternate Number"
          name="altNumber"
          value={formData.personalDetails.altNumber}
          countryCodeName="altNumberCountryCode"
          countryCodeValue={formData.personalDetails.altNumberCountryCode}
          onChange={(e) => {
            const value = e.target.value;
            // Only allow numbers and limit to 12 digits
            if (/^\d*$/.test(value) && value.length <= 10) {
              handlePersonalDetailsChange(e);
            }
          }}
          onCountryCodeChange={handlePersonalDetailsChange}
          placeholder="8602498711"
          error={errors.altNumber}
          countryCodes={countryCodes}
        />

        <InputField
          label="Email ID"
          name="emailID"
          type="email"
          value={formData.personalDetails.emailID}
          onChange={handlePersonalDetailsChange}
          
          required={true}
          placeholder="example@domain.com"
          error={errors.emailID}
        />

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">Permanent Address*</label>
          <textarea
            name="permanentAddress"
            value={formData.personalDetails.permanentAddress}
            onChange={handlePersonalDetailsChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.permanentAddress ? "border-red-500" : "border-gray-300"
            }`}
            rows="3"
          ></textarea>
          {errors.permanentAddress && (
            <p className="text-red-500 text-xs mt-1">
              {errors.permanentAddress}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">
            Correspondence Address*{" "}
            <input
              type="checkbox"
              checked={formData.sameAsPermanent}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Same as Permanent Address
          </label>
          <textarea
            name="correspondenceAddress"
            value={formData.personalDetails.correspondenceAddress}
            onChange={handlePersonalDetailsChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.correspondenceAddress
                ? "border-red-500"
                : "border-gray-300"
            }`}
            rows="3"
          ></textarea>
          {errors.correspondenceAddress && (
            <p className="text-red-500 text-xs mt-1">
              {errors.correspondenceAddress}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.image ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
          {formData.personalDetails.image && (
            <div className="mt-2">
              <img
                src={formData.personalDetails.image}
                alt="Preview"
                className="h-20 w-20 object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1PersonalDetails;