import React from "react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  ariaLabel,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`custom-button ${variant} ${size} ${className}`}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
