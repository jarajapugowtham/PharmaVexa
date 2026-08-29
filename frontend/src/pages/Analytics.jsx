import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsChart from "../components/AnalyticsChart";

const salesData = [
  { label: "Mon", value: 4200 },
  { label: "Tue", value: 5800 },
  { label: "Wed", value: 4900 },
  { label: "Thu", value: 7200 },
  { label: "Fri", value: 6400 },
  { label: "Sat", value: 8100 },
  { label: "Sun", value: 7600 },
];

export default function Analytics() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>BUSINESS INTELLIGENCE</span>
          <h2>Analytics</h2>
          <p>Understand pharmacy performance with useful insights.</p>
        </div>
      </div>

      <div className="stats-grid">
        <AnalyticsCard
          title="Revenue"
          value="₹44,200"
          change={15.8}
          description="Compared with last week"
        />

        <AnalyticsCard
          title="Orders"
          value="684"
          change={8.4}
          description="Weekly completed orders"
        />

        <AnalyticsCard
          title="Average Order"
          value="₹646"
          change={4.2}
          description="Average transaction value"
        />

        <AnalyticsCard
          title="Growth"
          value="18.6%"
          change={18.6}
          description="Overall business growth"
        />
      </div>

      <div className="analytics-layout">
        <div className="panel">
          <AnalyticsChart
            title="Weekly Sales"
            data={salesData}
          />
        </div>

        <div className="panel insights-panel">
          <div className="panel-title">
            <h3>Key Insights</h3>
          </div>

          <div className="insight-item">
            <strong>Top Category</strong>
            <span>Tablets</span>
          </div>

          <div className="insight-item">
            <strong>Best Selling Medicine</strong>
            <span>Paracetamol 500mg</span>
          </div>

          <div className="insight-item">
            <strong>Peak Sales Day</strong>
            <span>Saturday</span>
          </div>

          <div className="insight-item">
            <strong>Inventory Efficiency</strong>
            <span>78%</span>
          </div>
        </div>
      </div>
    </section>
  );
          }
