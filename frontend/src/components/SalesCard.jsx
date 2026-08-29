import React from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";

export default function SalesCard({
  medicine,
  quantity = 0,
  amount = 0,
  date = "",
}) {
  return (
    <article className="sales-card">
      <div className="sales-icon">
        <ShoppingCart size={21} />
      </div>

      <div className="sales-info">
        <h3>{medicine}</h3>
        <p>Quantity sold: {quantity}</p>
        {date && <small>{date}</small>}
      </div>

      <div className="sales-amount">
        <TrendingUp size={16} />
        <strong>₹{Number(amount).toLocaleString("en-IN")}</strong>
      </div>
    </article>
  );
}
