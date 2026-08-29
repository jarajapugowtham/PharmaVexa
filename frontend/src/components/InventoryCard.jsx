import React from "react";
import { Package, AlertTriangle, CheckCircle } from "lucide-react";

export default function InventoryCard({
  medicine,
  stock = 0,
  reorderLevel = 20,
  expiry,
}) {
  const status =
    stock <= 0 ? "critical" : stock <= reorderLevel ? "low" : "healthy";

  const StatusIcon = status === "healthy" ? CheckCircle : AlertTriangle;

  return (
    <article className={`inventory-card ${status}`}>
      <div className="inventory-icon">
        <Package size={22} />
      </div>

      <div className="inventory-info">
        <h3>{medicine}</h3>
        <p>Current stock: {stock}</p>

        {expiry && <small>Expiry: {expiry}</small>}
      </div>

      <div className={`inventory-status ${status}`}>
        <StatusIcon size={16} />
        <span>
          {status === "healthy"
            ? "Healthy"
            : status === "low"
            ? "Low Stock"
            : "Critical"}
        </span>
      </div>
    </article>
  );
}
