import React from "react";

export default function Textarea({
  label,
  name,
  value = "",
  onChange,
  placeholder = "",
  rows = 4,
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

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={error ? "input-error" : ""}
      />

      {error && <small className="form-error">{error}</small>}
    </div>
  );
}
