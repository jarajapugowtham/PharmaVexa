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
  disabled = false,
  min,
  max,
  step,
  autoComplete = "off",
}) {
  const inputId = `input-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={inputId}>
          {label}
          {required && <span>*</span>}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={error ? "input-error" : ""}
      />

      {error && (
        <small id={errorId} className="form-error">
          {error}
        </small>
      )}
    </div>
  );
}
