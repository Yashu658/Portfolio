import React from 'react';

const PhoneInputField = ({
  label,
  name,
  value,
  countryCodeName,
  countryCodeValue,
  onChange,
  onCountryCodeChange,
  required = false,
  placeholder = "",
  error,
  countryCodes,
  className = ""
}) => (
  <div className={className}>
    <label className="block text-gray-700 mb-2">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex gap-2">
      <select
        name={countryCodeName}
        value={countryCodeValue}
        onChange={onCountryCodeChange}
        className="w-26 px-3 py-2 border rounded-md border-gray-300"
      >
        {countryCodes.map((code) => (
          <option key={code.value} value={code.value}>
            {code.label}
          </option>
        ))}
      </select>
      <input
        type="tel"
        name={name}
        value={value}
        onChange={onChange}
        className={`flex-1 px-3 py-2 border rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
      />
    </div>
    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);

export default PhoneInputField; 