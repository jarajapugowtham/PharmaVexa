import React from "react";

export default function LoadingSpinner({ size = "medium", text = "Loading..." }) {
  return (
    <div className={`loading-container ${size}`}>
      <div className="loading-spinner" aria-label="Loading" />
      {text && <span>{text}</span>}
    </div>
  );
}
