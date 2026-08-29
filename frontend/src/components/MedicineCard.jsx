import React from "react";
import {
  Pill,
  AlertTriangle,
  CheckCircle,
  Pencil,
  Trash2,
} from "lucide-react";

export default function MedicineCard({
  name,
  category,
  stock = 0,
  expiry,
  price,
  onEdit,
  onDelete,
}) {
  const numericStock = Number(stock) || 0;

  const status =
    numericStock <= 0
      ? "critical"
      : numericStock < 20
      ? "low"
      : "healthy";

  const StatusIcon =
    status === "healthy" ? CheckCircle : AlertTriangle;

  const statusText =
    status === "healthy"
      ? "Healthy"
      : status === "low"
      ? "Low Stock"
      : "Critical";

  const formattedExpiry = expiry
    ? new Date(expiry).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not specified";

  return (
    <article className="medicine-card">
      {/* MEDICINE ICON */}
      <div className="medicine-icon">
        <Pill size={22} />
      </div>

      {/* MEDICINE INFORMATION */}
      <div className="medicine-info">
        <h3>{name || "Unnamed Medicine"}</h3>

        <span>{category || "Uncategorized"}</span>

        <div className="medicine-details">
          <span>Stock: {numericStock}</span>
          <span>Expiry: {formattedExpiry}</span>
        </div>
      </div>

      {/* STOCK STATUS */}
      <div className={`medicine-status ${status}`}>
        <StatusIcon size={15} />

        <span>{statusText}</span>
      </div>

      {/* PRICE */}
      {price !== undefined && price !== "" && (
        <strong className="medicine-price">
          ₹{Number(price).toLocaleString("en-IN")}
        </strong>
      )}

      {/* ACTIONS */}
      <div
        className="medicine-actions"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          marginLeft: "auto",
        }}
      >
        <button
          type="button"
          className="icon-button"
          onClick={() => onEdit?.()}
          aria-label={`Edit ${name}`}
          title="Edit medicine"
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={() => onDelete?.()}
          aria-label={`Delete ${name}`}
          title="Delete medicine"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </article>
  );
}
