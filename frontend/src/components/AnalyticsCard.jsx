import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function AnalyticsCard({
  title,
  value,
  change = 0,
  description = "",
}) {
  const positive = Number(change) >= 0;

  return (
    <article className="analytics-card">
      <span>{title}</span>

      <strong>{value}</strong>

      <div className={positive ? "analytics-up" : "analytics-down"}>
        {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <b>{positive ? "+" : ""}{change}%</b>
      </div>

      {description && <small>{description}</small>}
    </article>
  );
}
