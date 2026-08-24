import React from "react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`custom-button ${variant} ${size} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
