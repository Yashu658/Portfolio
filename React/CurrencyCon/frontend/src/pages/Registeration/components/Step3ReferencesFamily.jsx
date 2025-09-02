import React, { useCallback } from 'react';
import InputField from './common/InputField';
import PhoneInputField from './common/PhoneInputField';

const RELATION_OPTIONS = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "spouse", label: "Spouse" },
  { value: "son", label: "Son" },
  { value: "daughter", label: "Daughter" },
  { value: "brother", label: "Brother" },
  { value: "sister", label: "Sister" },
  { value: "grandfather", label: "Grandfather" },
  { value: "grandmother", label: "Grandmother" },
  { value: "uncle", label: "Uncle" },
  { value: "aunt", label: "Aunt" },
  { value: "cousin", label: "Cousin" },
  { value: "father_in_law", label: "Father-in-law" },
  { value: "mother_in_law", label: "Mother-in-law" },
  { value: "brother_in_law", label: "Brother-in-law" },
  { value: "sister_in_law", label: "Sister-in-law" },
  { value: "son_in_law", label: "Son-in-law" },
  { value: "daughter_in_law", label: "Daughter-in-law" },
  { value: "guardian", label: "Guardian" },
  { value: "other", label: "Other" }
];

const RelationSelect = ({ value, onChange, name, required, error, placeholder, className = "", dataIndex, onKeyDown }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Relation
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <select
      name={name}
      value={value || ""}
      onChange={onChange}
      onKeyDown={onKeyDown}
      data-index={dataIndex}
      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Select Relation</option>
      {RELATION_OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const Step3ReferencesFamily = ({
  formData,
  errors,
  handleEmergencyContactChange,
  handleArrayFieldChange,
  addArrayField,
  removeArrayField,
  countryCodes
}) => {
  const handleReferenceChange = useCallback((index, e) => {
    handleArrayFieldChange("professionalReferences", index, e);
  }, [handleArrayFieldChange]);

  const handleFamilyChange = useCallback((index, e) => {
    handleArrayFieldChange("familyDetails", index, e);
  }, [handleArrayFieldChange]);

  const handleReferenceKeyDown = useCallback((e, index, fieldName) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const nextIndex = e.key === 'Enter' ? index + 1 : index;
      const nextField = getNextReferenceField(fieldName);
      
      if (nextField === null && e.key === 'Enter') {
        addArrayField("professionalReferences", {
          name: "",
          contactNo: "",
          contactNoCountryCode: "+91",
          organization: "",
          designation: "",
        });
      } else if (nextField) {
        const nextInput = document.querySelector(`[name="${nextField}"][data-index="${nextIndex}"]`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }, [addArrayField]);

  const handleFamilyKeyDown = useCallback((e, index, fieldName) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const nextIndex = e.key === 'Enter' ? index + 1 : index;
      const nextField = getNextFamilyField(fieldName);
      
      if (nextField === null && e.key === 'Enter') {
        addArrayField("familyDetails", {
          name: "",
          relation: "",
          occupation: "",
          phoneNo: "",
          phoneNoCountryCode: "+91",
        });
      } else if (nextField) {
        const nextInput = document.querySelector(`[name="${nextField}"][data-index="${nextIndex}"]`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }, [addArrayField]);

  const getNextReferenceField = (currentField) => {
    const fieldOrder = ['name', 'contactNo', 'organization', 'designation'];
    const currentIndex = fieldOrder.indexOf(currentField);
    return currentIndex < fieldOrder.length - 1 ? fieldOrder[currentIndex + 1] : null;
  };

  const getNextFamilyField = (currentField) => {
    const fieldOrder = ['name', 'relation', 'occupation', 'phoneNo'];
    const currentIndex = fieldOrder.indexOf(currentField);
    return currentIndex < fieldOrder.length - 1 ? fieldOrder[currentIndex + 1] : null;
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Professional References</h2>
        {formData.professionalReferences.map((reference, index) => (
          <div key={`ref-${index}`} className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Reference #{index + 1}</h3>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("professionalReferences", index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Name"
                name="name"
                value={reference.name || ""}
                onChange={(e) => handleReferenceChange(index, e)}
                onKeyDown={(e) => handleReferenceKeyDown(e, index, 'name')}
                required={true}
                error={errors[`refName_${index}`]}
                placeholder="Full Name"
                dataIndex={index}
                autoFocus={index === 0}
              />
              <PhoneInputField
                label="Contact Number"
                name="contactNo"
                value={reference.contactNo || ""}
                countryCodeName="contactNoCountryCode"
                countryCodeValue={reference.contactNoCountryCode || "+91"}
                onChange={(e) => handleReferenceChange(index, e)}
                onCountryCodeChange={(e) => handleReferenceChange(index, e)}
                onKeyDown={(e) => handleReferenceKeyDown(e, index, 'contactNo')}
                required={true}
                placeholder="9876543210"
                error={errors[`refContact_${index}`]}
                countryCodes={countryCodes}
                dataIndex={index}
              />
              <InputField
                label="Organization"
                name="organization"
                value={reference.organization || ""}
                onChange={(e) => handleReferenceChange(index, e)}
                onKeyDown={(e) => handleReferenceKeyDown(e, index, 'organization')}
                placeholder="Company Name"
                dataIndex={index}
              />
              <InputField
                label="Designation"
                name="designation"
                value={reference.designation || ""}
                onChange={(e) => handleReferenceChange(index, e)}
                onKeyDown={(e) => handleReferenceKeyDown(e, index, 'designation')}
                placeholder="Job Title"
                dataIndex={index}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addArrayField("professionalReferences", {
              name: "",
              contactNo: "",
              contactNoCountryCode: "+91",
              organization: "",
              designation: "",
            })
          }
          className="mt-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200"
        >
          + Add Reference
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Emergency Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Name"
            name="name"
            value={formData.emergencyContactDetails.name || ""}
            onChange={handleEmergencyContactChange}
            required={true}
            error={errors.emergencyName}
            placeholder="Full Name"
            autoFocus={true}
          />
          <RelationSelect
            value={formData.emergencyContactDetails.relation || ""}
            onChange={handleEmergencyContactChange}
            name="relation"
            required={true}
            error={errors.emergencyRelation}
          />
          <PhoneInputField
            label="Contact Number"
            name="contactNo"
            value={formData.emergencyContactDetails.contactNo || ""}
            countryCodeName="contactNoCountryCode"
            countryCodeValue={formData.emergencyContactDetails.contactNoCountryCode || "+91"}
            onChange={handleEmergencyContactChange}
            onCountryCodeChange={handleEmergencyContactChange}
            required={true}
            placeholder="9876543210"
            error={errors.emergencyContact}
            countryCodes={countryCodes}
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Family Details</h2>
        {formData.familyDetails.map((member, index) => (
          <div key={`family-${index}`} className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Family Member #{index + 1}</h3>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("familyDetails", index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Name"
                name="name"
                value={member.name || ""}
                onChange={(e) => handleFamilyChange(index, e)}
                onKeyDown={(e) => handleFamilyKeyDown(e, index, 'name')}
                required={true}
                error={errors[`familyName_${index}`]}
                placeholder="Full Name"
                dataIndex={index}
                autoFocus={index === 0}
              />
              <RelationSelect
                value={member.relation || ""}
                onChange={(e) => handleFamilyChange(index, e)}
                name="relation"
                required={true}
                error={errors[`familyRelation_${index}`]}
                dataIndex={index}
                onKeyDown={(e) => handleFamilyKeyDown(e, index, 'relation')}
              />
              <InputField
                label="Occupation"
                name="occupation"
                value={member.occupation || ""}
                onChange={(e) => handleFamilyChange(index, e)}
                onKeyDown={(e) => handleFamilyKeyDown(e, index, 'occupation')}
                placeholder="e.g. Business, Service, Housewife"
                dataIndex={index}
              />
              <PhoneInputField
                label="Phone Number"
                name="phoneNo"
                value={member.phoneNo || ""}
                countryCodeName="phoneNoCountryCode"
                countryCodeValue={member.phoneNoCountryCode || "+91"}
                onChange={(e) => handleFamilyChange(index, e)}
                onCountryCodeChange={(e) => handleFamilyChange(index, e)}
                onKeyDown={(e) => handleFamilyKeyDown(e, index, 'phoneNo')}
                placeholder="9876543210"
                countryCodes={countryCodes}
                dataIndex={index}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addArrayField("familyDetails", {
              name: "",
              relation: "",
              occupation: "",
              phoneNo: "",
              phoneNoCountryCode: "+91",
            })
          }
          className="mt-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200"
        >
          + Add Family Member
        </button>
      </div>
    </div>
  );
};

export default Step3ReferencesFamily; 