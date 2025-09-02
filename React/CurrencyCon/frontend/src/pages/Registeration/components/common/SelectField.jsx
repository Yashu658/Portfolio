import React from 'react';

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
  className = ""
}) => (
  <div className={className}>
    <label className="block text-gray-700 mb-2">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);

export default SelectField; 