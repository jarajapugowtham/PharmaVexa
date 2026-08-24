import React from "react";

export default function FormInput({
  label,
  name,
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  required = false,
  error = "",
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={error ? "input-error" : ""}
      />

      {error && <small className="form-error">{error}</small>}
    </div>
  );
}
