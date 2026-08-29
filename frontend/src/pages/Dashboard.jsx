import React from "react";
import StatCard from "../components/StatCard";
import AlertCard from "../components/AlertCard";
import DashboardCard from "../components/DashboardCard";
import {
  Pill,
  Package,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="page">
      <div className="hero-card">
        <span>PHARMACY INTELLIGENCE</span>

        <h2>Smarter pharmacy management.</h2>

        <p>
          Monitor medicines, inventory, sales and alerts
          from one powerful dashboard.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Medicines"
          value="2,486"
          change="+12.4%"
          icon={Pill}
        />

        <StatCard
          title="Available Stock"
          value="18,420"
          change="+8.2%"
          icon={Package}
        />

        <StatCard
          title="Low Stock"
          value="184"
          change="Needs attention"
          icon={AlertTriangle}
          variant="warning"
        />

        <StatCard
          title="Monthly Sales"
          value="₹1.84L"
          change="+15.8%"
          icon={ShoppingCart}
          variant="success"
        />
      </div>

      <div className="content-grid">
        <DashboardCard
          title="Inventory Health"
          value="78%"
          subtitle="Current inventory condition"
        >
          <div className="health-row">
            <span>Healthy</span>
            <b>78%</b>
          </div>

          <div className="progress">
            <i style={{ width: "78%" }} />
          </div>

          <div className="health-row">
            <span>Low Stock</span>
            <b>15%</b>
          </div>

          <div className="progress">
            <i style={{ width: "15%" }} />
          </div>

          <div className="health-row">
            <span>Critical</span>
            <b>7%</b>
          </div>

          <div className="progress">
            <i style={{ width: "7%" }} />
          </div>
        </DashboardCard>

        <DashboardCard
          title="Smart Alerts"
          value="7"
          subtitle="Active pharmacy alerts"
        >
          <AlertCard
            title="Low Stock"
            message="Paracetamol 500mg needs restocking."
            type="warning"
          />

          <AlertCard
            title="Expiry Warning"
            message="Amoxicillin 500mg is expiring soon."
            type="expiry"
          />

          <AlertCard
            title="Critical Stock"
            message="Cetirizine 10mg stock is critically low."
            type="warning"
          />
        </DashboardCard>
      </div>
    </div>
  );
}
