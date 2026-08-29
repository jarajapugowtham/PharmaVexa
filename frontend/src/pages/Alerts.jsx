import React from "react";
import AlertCard from "../components/AlertCard";

const alerts = [
  {
    id: 1,
    title: "Low Stock",
    message: "Paracetamol 500mg stock is running low.",
    type: "warning",
    time: "10 minutes ago",
  },
  {
    id: 2,
    title: "Expiry Warning",
    message: "Amoxicillin 500mg is approaching its expiry date.",
    type: "expiry",
    time: "35 minutes ago",
  },
  {
    id: 3,
    title: "Critical Stock",
    message: "Cetirizine 10mg has reached a critical stock level.",
    type: "warning",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Inventory Updated",
    message: "New medicine stock was successfully added.",
    type: "success",
    time: "2 hours ago",
  },
];

export default function Alerts() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>PHARMACY MONITORING</span>
          <h2>Alerts</h2>
          <p>Stay updated with important pharmacy notifications.</p>
        </div>
      </div>

      <div className="alerts-summary">
        <div className="stat-card">
          <span>Active Alerts</span>
          <strong>{alerts.length}</strong>
          <small>Needs attention</small>
        </div>
      </div>

      <div className="alerts-list">
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            title={alert.title}
            message={alert.message}
            type={alert.type}
            time={alert.time}
          />
        ))}
      </div>
    </section>
  );
}
