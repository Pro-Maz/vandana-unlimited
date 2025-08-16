import React from "react";

export function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 rounded-xl border w-full ${className}`}
    />
  );
}
