import React, { useCallback } from 'react';
import InputField from './common/InputField';
import MonthYearField from './common/MonthYearField';

const Step2EducationEmployment = ({
  formData,
  errors,
  handleArrayFieldChange,
  addArrayField,
  removeArrayField,
  handleCheckboxChange
}) => {
  const handleEducationChange = useCallback((index, e) => {
    handleArrayFieldChange("educationalDetails", index, e);
  }, [handleArrayFieldChange]);

  const handleEmploymentChange = useCallback((index, e) => {
    handleArrayFieldChange("employmentDetails", index, e);
  }, [handleArrayFieldChange]);

  const handleEducationKeyDown = useCallback((e, index, fieldName) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const nextIndex = e.key === 'Enter' ? index + 1 : index;
      const nextField = getNextField(fieldName);
      
      if (nextField === null && e.key === 'Enter') {
        addArrayField("educationalDetails", {
          degree: "",
          university: "",
          from: "",
          to: "",
          percentageOrGrade: "",
          specialization: "",
        });
      } else if (nextField) {
        const nextInput = document.querySelector(`[name="${nextField}"][data-index="${nextIndex}"]`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }, [addArrayField]);

  const getNextField = (currentField) => {
    const fieldOrder = ['degree', 'university', 'from', 'to', 'percentageOrGrade', 'specialization'];
    const currentIndex = fieldOrder.indexOf(currentField);
    return currentIndex < fieldOrder.length - 1 ? fieldOrder[currentIndex + 1] : null;
  };

  const handleEmploymentKeyDown = useCallback((e, index, fieldName) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const nextIndex = e.key === 'Enter' ? index + 1 : index;
      const nextField = getNextEmploymentField(fieldName);
      
      if (nextField === null && e.key === 'Enter') {
        addArrayField("employmentDetails", {
          organization: "",
          designation: "",
          periodOfService: { from: "", to: "" },
          annualCTC: "",
          reasonForLeaving: "",
        });
      } else if (nextField) {
        const nextInput = document.querySelector(`[name="${nextField}"][data-index="${nextIndex}"]`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }, [addArrayField]);

  const getNextEmploymentField = (currentField) => {
    const fieldOrder = ['organization', 'designation', 'periodOfService.from', 'periodOfService.to', 'annualCTC', 'reasonForLeaving'];
    const currentIndex = fieldOrder.indexOf(currentField);
    return currentIndex < fieldOrder.length - 1 ? fieldOrder[currentIndex + 1] : null;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Education Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formData.educationalDetails.map((edu, index) => (
          <React.Fragment key={`edu-${index}`}>
            <div className="col-span-2 flex justify-between items-center">
              <h3 className="text-lg font-medium">Education {index + 1}</h3>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("educationalDetails", index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
            <InputField
              label="Degree"
              name="degree"
              value={edu.degree || ""}
              onChange={(e) => handleEducationChange(index, e)}
              onKeyDown={(e) => handleEducationKeyDown(e, index, 'degree')}
              required={true}
              error={errors[`eduDegree_${index}`]}
              placeholder="e.g. B.Tech, M.Sc"
              autoFocus={index === 0}
              dataIndex={index}
            />
            <InputField
              label="University"
              name="university"
              value={edu.university || ""}
              onChange={(e) => handleEducationChange(index, e)}
              onKeyDown={(e) => handleEducationKeyDown(e, index, 'university')}
              required={true}
              error={errors[`eduUniversity_${index}`]}
              placeholder="University Name"
              dataIndex={index}
            />
            <MonthYearField
              label="From"
              name="from"
              value={edu.from || ""}
              onChange={(e) => handleEducationChange(index, e)}
              onKeyDown={(e) => handleEducationKeyDown(e, index, 'from')}
              required={true}
              error={errors[`eduFrom_${index}`]}
              dataIndex={index}
            />
            <MonthYearField
              label="To"
              name="to"
              value={edu.to || ""}
              onChange={(e) => handleEducationChange(index, e)}
              onKeyDown={(e) => handleEducationKeyDown(e, index, 'to')}
              required={true}
              error={errors[`eduTo_${index}`]}
              dataIndex={index}
            />
            <InputField
              label="Percentage/Grade"
              name="percentageOrGrade"
              value={edu.percentageOrGrade || ""}
              onChange={(e) => handleEducationChange(index, e)}
              onKeyDown={(e) => handleEducationKeyDown(e, index, 'percentageOrGrade')}
              required={true}
              error={errors[`eduGrade_${index}`]}
              placeholder="e.g. 85% or A+"
              dataIndex={index}
            />
            <InputField
              label="Specialization"
              name="specialization"
              value={edu.specialization || ""}
              onChange={(e) => handleEducationChange(index, e)}
              onKeyDown={(e) => handleEducationKeyDown(e, index, 'specialization')}
              error={errors[`eduSpecialization_${index}`]}
              placeholder="e.g. Computer Science"
              dataIndex={index}
            />
          </React.Fragment>
        ))}
        <div className="col-span-2">
          <button
            type="button"
            onClick={() =>
              addArrayField("educationalDetails", {
                degree: "",
                university: "",
                from: "",
                to: "",
                percentageOrGrade: "",
                specialization: "",
              })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Education
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="isfresher"
            name="isfresher"
            checked={formData.isfresher}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="isfresher" className="ml-2 block text-sm text-gray-900">
            I am a fresher (No previous employment history)
          </label>
        </div>

        {!formData.isfresher && (
          <>
            <h2 className="text-xl font-semibold mb-4">Employment History</h2>
            {errors.employmentDetails && (
              <div className="text-red-500 mb-4">{errors.employmentDetails}</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.employmentDetails.map((emp, index) => (
                <React.Fragment key={`emp-${index}`}>
                  <div className="col-span-2 flex justify-between items-center">
                    <h3 className="text-lg font-medium">Employment {index + 1}</h3>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeArrayField("employmentDetails", index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <InputField
                    label="Organization"
                    name="organization"
                    value={emp.organization || ""}
                    onChange={(e) => handleEmploymentChange(index, e)}
                    onKeyDown={(e) => handleEmploymentKeyDown(e, index, 'organization')}
                    required={true}
                    error={errors[`empOrg_${index}`]}
                    placeholder="Company Name"
                    dataIndex={index}
                    autoFocus={index === 0}
                  />
                  <InputField
                    label="Designation"
                    name="designation"
                    value={emp.designation || ""}
                    onChange={(e) => handleEmploymentChange(index, e)}
                    onKeyDown={(e) => handleEmploymentKeyDown(e, index, 'designation')}
                    required={true}
                    error={errors[`empDesignation_${index}`]}
                    placeholder="Job Title"
                    dataIndex={index}
                  />
                  <MonthYearField
                    label="From"
                    name="periodOfService.from"
                    value={emp.periodOfService?.from || ""}
                    onChange={(e) => handleEmploymentChange(index, e)}
                    onKeyDown={(e) => handleEmploymentKeyDown(e, index, 'periodOfService.from')}
                    required={true}
                    error={errors[`empFrom_${index}`]}
                    dataIndex={index}
                  />
                  <MonthYearField
                    label="To"
                    name="periodOfService.to"
                    value={emp.periodOfService?.to || ""}
                    onChange={(e) => handleEmploymentChange(index, e)}
                    onKeyDown={(e) => handleEmploymentKeyDown(e, index, 'periodOfService.to')}
                    required={true}
                    error={errors[`empTo_${index}`]}
                    dataIndex={index}
                  />
                  <InputField
                    label="Annual CTC"
                    name="annualCTC"
                    value={emp.annualCTC || ""}
                    onChange={(e) => handleEmploymentChange(index, e)}
                    onKeyDown={(e) => handleEmploymentKeyDown(e, index, 'annualCTC')}
                    required={true}
                    placeholder="e.g. 500000"
                    error={errors[`empCTC_${index}`]}
                    dataIndex={index}
                  />
                  <InputField
                    label="Reason for Leaving"
                    name="reasonForLeaving"
                    value={emp.reasonForLeaving || ""}
                    onChange={(e) => handleEmploymentChange(index, e)}
                    onKeyDown={(e) => handleEmploymentKeyDown(e, index, 'reasonForLeaving')}
                    required={true}
                    error={errors[`empReason_${index}`]}
                    placeholder="Reason for leaving the organization"
                    dataIndex={index}
                  />
                </React.Fragment>
              ))}
              <div className="col-span-2">
                <button
                  type="button"
                  onClick={() =>
                    addArrayField("employmentDetails", {
                      organization: "",
                      designation: "",
                      periodOfService: { from: "", to: "" },
                      annualCTC: "",
                      reasonForLeaving: "",
                    })
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Employment
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step2EducationEmployment; 