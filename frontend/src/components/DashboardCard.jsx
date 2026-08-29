import React from "react";

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  children,
}) {
  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <span>{title}</span>
          <h3>{value}</h3>
        </div>

        {icon && <div className="dashboard-card-icon">{icon}</div>}
      </div>

      {subtitle && <p>{subtitle}</p>}

      {children}
    </section>
  );
}
