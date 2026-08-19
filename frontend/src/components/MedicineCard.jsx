import React from "react";
import { Pill, AlertTriangle, CheckCircle } from "lucide-react";

export default function MedicineCard({
  name,
  category,
  stock = 0,
  expiry,
  price,
}) {
  const status =
    stock <= 0 ? "critical" : stock < 20 ? "low" : "healthy";

  const StatusIcon =
    status === "healthy"
      ? CheckCircle
      : AlertTriangle;

  return (
    <article className="medicine-card">
      <div className="medicine-icon">
        <Pill size={22} />
      </div>

      <div className="medicine-info">
        <h3>{name}</h3>
        <span>{category}</span>

        <div className="medicine-details">
          <span>Stock: {stock}</span>
          {expiry && <span>Expiry: {expiry}</span>}
        </div>
      </div>

      <div className={`medicine-status ${status}`}>
        <StatusIcon size={15} />
        <span>
          {status === "healthy"
            ? "Healthy"
            : status === "low"
            ? "Low Stock"
            : "Critical"}
        </span>
      </div>

      {price !== undefined && (
        <strong className="medicine-price">₹{price}</strong>
      )}
    </article>
  );
}
