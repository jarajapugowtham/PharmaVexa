import React from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import AlertCard from "../components/AlertCard";
import DashboardCard from "../components/DashboardCard";

import {
  Pill,
  Package,
  ShoppingCart,
  AlertTriangle,
  ArrowRight,
  Plus,
  BarChart3,
  ClipboardList,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="page">

      {/* =========================
          HERO
      ========================= */}
      <section className="hero-card">
        <span>PHARMACY INTELLIGENCE</span>

        <h2>Smarter pharmacy management.</h2>

        <p>
          Monitor medicines, inventory, sales and alerts
          from one powerful dashboard.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "22px",
          }}
        >
          <Link
            to="/medicines"
            className="custom-button primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Plus size={17} />
            Manage Medicines
          </Link>

          <Link
            to="/analytics"
            className="custom-button secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BarChart3 size={17} />
            View Analytics
          </Link>
        </div>
      </section>

      {/* =========================
          STATS
      ========================= */}
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

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div className="content-grid">

        {/* INVENTORY HEALTH */}
        <DashboardCard
          title="Inventory Health"
          value="78%"
          subtitle="Current inventory condition"
          icon={<Package size={21} />}
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

          <Link
            to="/inventory"
            className="custom-button primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              marginTop: "20px",
            }}
          >
            Open Inventory
            <ArrowRight size={16} />
          </Link>
        </DashboardCard>

        {/* SMART ALERTS */}
        <DashboardCard
          title="Smart Alerts"
          value="7"
          subtitle="Active pharmacy alerts"
          icon={<AlertTriangle size={21} />}
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

          <Link
            to="/alerts"
            className="custom-button secondary"
            style={{
              width: "100%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              marginTop: "15px",
            }}
          >
            <ClipboardList size={16} />
            View All Alerts
            <ArrowRight size={16} />
          </Link>
        </DashboardCard>

      </div>

      {/* =========================
          QUICK ACTIONS
      ========================= */}
      <section className="panel">
        <div className="panel-title">
          <div>
            <h3>Quick Actions</h3>
            <span>Access frequently used pharmacy functions</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "12px",
          }}
        >
          <Link
            to="/medicines"
            className="custom-button primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Plus size={17} />
            Add Medicine
          </Link>

          <Link
            to="/inventory"
            className="custom-button secondary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Package size={17} />
            Check Inventory
          </Link>

          <Link
            to="/sales"
            className="custom-button secondary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <ShoppingCart size={17} />
            View Sales
          </Link>

          <Link
            to="/analytics"
            className="custom-button secondary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <BarChart3 size={17} />
            Analytics
          </Link>
        </div>
      </section>

    </div>
  );
        }
