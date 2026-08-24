import React from "react";

export default function SelectInput({
  label,
  name,
  value = "",
  onChange,
  options = [],
  placeholder = "Select an option",
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

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={error ? "input-error" : ""}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && <small className="form-error">{error}</small>}
    </div>
  );
      }
