import React from "react";

export default function AnalyticsChart({
  data = [],
  title = "Sales Overview",
}) {
  const values = data.length
    ? data.map((item) => Number(item.value) || 0)
    : [35, 52, 44, 68, 58, 76, 64];

  const max = Math.max(...values, 1);

  return (
    <div className="analytics-chart">
      <div className="chart-header">
        <h3>{title}</h3>
        <span>Last 7 days</span>
      </div>

      <div className="chart-bars">
        {values.map((value, index) => (
          <div className="chart-column" key={index}>
            <div
              className="chart-bar"
              style={{ height: `${(value / max) * 100}%` }}
              title={String(value)}
            />
            <small>
              {data[index]?.label || `Day ${index + 1}`}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
