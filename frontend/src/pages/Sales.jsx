import React from "react";
import SalesCard from "../components/SalesCard";
import SalesTable from "../components/SalesTable";

const sales = [
  {
    id: 1,
    medicine: "Paracetamol 500mg",
    quantity: 42,
    amount: 1050,
    date: "29 Aug 2026",
    status: "Completed",
  },
  {
    id: 2,
    medicine: "Amoxicillin 500mg",
    quantity: 18,
    amount: 1530,
    date: "29 Aug 2026",
    status: "Completed",
  },
  {
    id: 3,
    medicine: "Cetirizine 10mg",
    quantity: 25,
    amount: 875,
    date: "28 Aug 2026",
    status: "Completed",
  },
];

export default function Sales() {
  const totalSales = sales.reduce(
    (total, item) => total + item.amount,
    0
  );

  const totalItems = sales.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>PHARMACY PERFORMANCE</span>
          <h2>Sales</h2>
          <p>Track medicine sales and transactions.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Today's Sales</span>
          <strong>₹{totalSales.toLocaleString("en-IN")}</strong>
          <small>+15.8%</small>
        </div>

        <div className="stat-card">
          <span>Items Sold</span>
          <strong>{totalItems}</strong>
          <small>Today's total</small>
        </div>

        <div className="stat-card">
          <span>Transactions</span>
          <strong>{sales.length}</strong>
          <small>Completed</small>
        </div>
      </div>

      <div className="sales-grid">
        {sales.map((item) => (
          <SalesCard
            key={item.id}
            medicine={item.medicine}
            quantity={item.quantity}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </div>

      <div className="panel">
        <div className="panel-title">
          <h3>Recent Sales</h3>
          <span>{sales.length} transactions</span>
        </div>

        <SalesTable sales={sales} />
      </div>
    </section>
  );
}
