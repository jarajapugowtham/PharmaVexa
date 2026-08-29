import React from "react";
import { Bell, X } from "lucide-react";

export default function Notification({
  title = "Notification",
  message,
  type = "info",
  onClose,
}) {
  return (
    <div className={`notification ${type}`}>
      <div className="notification-icon">
        <Bell size={18} />
      </div>

      <div className="notification-content">
        <strong>{title}</strong>
        {message && <p>{message}</p>}
      </div>

      {onClose && (
        <button
          type="button"
          className="notification-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
