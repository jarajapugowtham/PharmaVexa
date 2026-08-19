import React from "react";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  variant = "default",
}) {
  return (
    <article className={`stat-card ${variant}`}>
      <div className="stat-card-top">
        <span>{title}</span>

        {Icon && (
          <div className="stat-icon">
            <Icon size={18} />
          </div>
        )}
      </div>

      <strong>{value}</strong>

      {change && <small>{change}</small>}
    </article>
  );
}
