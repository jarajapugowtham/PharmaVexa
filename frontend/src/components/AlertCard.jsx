import React from "react";
import { AlertTriangle, Clock, CheckCircle } from "lucide-react";

export default function AlertCard({
  title,
  message,
  type = "warning",
  time,
}) {
  const icons = {
    warning: AlertTriangle,
    expiry: Clock,
    success: CheckCircle,
  };

  const Icon = icons[type] || AlertTriangle;

  return (
    <article className={`alert-card ${type}`}>
      <div className="alert-icon">
        <Icon size={20} />
      </div>

      <div className="alert-content">
        <h3>{title}</h3>
        <p>{message}</p>
        {time && <small>{time}</small>}
      </div>
    </article>
  );
}
