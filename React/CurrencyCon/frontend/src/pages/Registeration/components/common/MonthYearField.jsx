import React from 'react';

const MonthYearField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  error,
  className = "",
  onKeyDown,
  dataIndex,
  autoFocus = false
}) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type="month"
      name={name}
      value={value || ""}
      onChange={onChange}
      onKeyDown={onKeyDown}
      data-index={dataIndex}
      autoFocus={autoFocus}
      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      placeholder="MM/YYYY"
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default MonthYearField; 