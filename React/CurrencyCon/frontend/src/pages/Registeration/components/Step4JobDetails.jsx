import React from 'react';
import InputField from './common/InputField';
import SelectField from './common/SelectField';

const Step4JobDetails = ({
  formData,
  errors,
  handleJobDetailsChange,
  handleBankDetailsChange
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Department"
          name="department"
          value={formData.jobDetail.department}
          onChange={handleJobDetailsChange}
          required={true}
          error={errors.department}
        />
        <InputField
          label="Designation"
          name="designation"
          value={formData.jobDetail.designation}
          onChange={handleJobDetailsChange}
          required={true}
          error={errors.designation}
        />
        <InputField
          label="Hiring Date"
          name="hiringDate"
          type="date"
          value={formData.jobDetail.hiringDate}
          onChange={handleJobDetailsChange}
          required={true}
          error={errors.hiringDate}
        />
        <InputField
          label="Salary"
          name="salary"
          value={formData.jobDetail.salary}
          onChange={handleJobDetailsChange}
          required={true}
          placeholder="e.g. 500000"
          error={errors.salary}
        />
        <div className="md:col-span-2">
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Password Information</h3>
            <p className="text-sm text-blue-600">
              If you leave the password field empty, a default password will be generated using your first name and birth year (e.g., John@1990).
              You can also set a custom password if you prefer.
            </p>
          </div>
        </div>
        <InputField
          label="Password (Optional)"
          name="password"
          type="password"
          value={formData.jobDetail.password}
          onChange={handleJobDetailsChange}
          placeholder="Leave empty for auto-generated password"
          error={errors.password}
        />
        <InputField
          label="Confirm Password (Optional)"
          name="confirmPassword"
          type="password"
          value={formData.jobDetail.confirmPassword}
          onChange={handleJobDetailsChange}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
        />

        <SelectField
          label="Role"
          name="role"
          value={formData.jobDetail.role}
          onChange={handleJobDetailsChange}
          options={[
            { value: "Employee", label: "Employee" },
            { value: "HOD", label: "HOD" },
            { value: "Director", label: "Director" },
          ]}
          error={errors.role}
        />

        <SelectField
          label="Status"
          name="status"
          value={formData.jobDetail.status}
          onChange={handleJobDetailsChange}
          options={[
            { value: "Active", label: "Active" },
            { value: "Suspended", label: "Suspended" },
            { value: "Terminated", label: "Terminated" },
            { value: "Retired", label: "Retired" },
            { value: "Resigned", label: "Resigned" },
          ]}
          error={errors.status}
        />

        <InputField
          label="Shift Start Time"
          name="shiftStartTime"
          type="time"
          value={formData.jobDetail.shiftStartTime}
          onChange={handleJobDetailsChange}
          error={errors.shiftStartTime}
        />

        <InputField
          label="Shift End Time"
          name="shiftEndTime"
          type="time"
          value={formData.jobDetail.shiftEndTime}
          onChange={handleJobDetailsChange}
          error={errors.shiftEndTime}
        />

        <SelectField
          label="Week Off"
          name="weekOff"
          value={formData.jobDetail.weekOff}
          onChange={handleJobDetailsChange}
          options={[
            { value: "Sunday", label: "Sunday" },
            { value: "Monday", label: "Monday" },
            { value: "Tuesday", label: "Tuesday" },
            { value: "Wednesday", label: "Wednesday" },
            { value: "Thursday", label: "Thursday" },
            { value: "Friday", label: "Friday" },
            { value: "Saturday", label: "Saturday" },
          ]}
          error={errors.weekOff}
        />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Bank Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Bank Name"
          name="bankName"
          value={formData.jobDetail.bankDetails.bankName}
          onChange={handleBankDetailsChange}
          required={true}
          error={errors.bankName}
        />
        <InputField
          label="Account Number"
          name="accountNo"
          value={formData.jobDetail.bankDetails.accountNo}
          onChange={handleBankDetailsChange}
          required={true}
          error={errors.accountNo}
        />
        <InputField
          label="IFSC Code"
          name="ifscCode"
          value={formData.jobDetail.bankDetails.ifscCode}
          onChange={handleBankDetailsChange}
          required={true}
          placeholder="ABCD0123456"
          error={errors.ifscCode}
        />
        <InputField
          label="Branch Address"
          name="branchAddress"
          value={formData.jobDetail.bankDetails.branchAddress}
          onChange={handleBankDetailsChange}
          required={true}
          error={errors.branchAddress}
        />
        <InputField
          label="Manager Name"
          name="ManagerName"
          value={formData.jobDetail.ManagerName}
          onChange={handleJobDetailsChange}
          required={true}
          error={errors.ManagerName}
        />
        <InputField
          label="Manager Email"
          name="ManagerEmail"
          value={formData.jobDetail.ManagerEmail}
          onChange={handleJobDetailsChange}
          required={true}
          error={errors.ManagerEmail}
        />
      </div>
    </div>
  );
};

export default Step4JobDetails; 