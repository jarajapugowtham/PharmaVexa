import React from "react";
import { CheckCircle, AlertTriangle, Info, X } from "lucide-react";

export default function Toast({
  message,
  type = "success",
  onClose,
}) {
  const icons = {
    success: CheckCircle,
    error: AlertTriangle,
    warning: AlertTriangle,
    info: Info,
  };

  const Icon = icons[type] || Info;

  return (
    <div className={`toast ${type}`} role="alert">
      <Icon size={19} />

      <span>{message}</span>

      {onClose && (
        <button type="button" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>
      )}
    </div>
  );
}
