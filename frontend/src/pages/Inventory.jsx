import React from "react";
import InventoryCard from "../components/InventoryCard";
import InventoryTable from "../components/InventoryTable";

const inventory = [
  {
    id: 1,
    medicine: "Paracetamol 500mg",
    stock: 120,
    reorderLevel: 20,
    expiry: "2027-04-15",
    status: "Healthy",
  },
  {
    id: 2,
    medicine: "Amoxicillin 500mg",
    stock: 14,
    reorderLevel: 20,
    expiry: "2026-11-20",
    status: "Low Stock",
  },
  {
    id: 3,
    medicine: "Cetirizine 10mg",
    stock: 8,
    reorderLevel: 15,
    expiry: "2027-01-10",
    status: "Low Stock",
  },
];

export default function Inventory() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>STOCK MANAGEMENT</span>
          <h2>Inventory</h2>
          <p>Monitor stock levels and medicine expiry dates.</p>
        </div>
      </div>

      <div className="inventory-grid">
        {inventory.map((item) => (
          <InventoryCard
            key={item.id}
            medicine={item.medicine}
            stock={item.stock}
            reorderLevel={item.reorderLevel}
            expiry={item.expiry}
          />
        ))}
      </div>

      <div className="panel">
        <div className="panel-title">
          <h3>Inventory Overview</h3>
          <span>{inventory.length} medicines</span>
        </div>

        <InventoryTable inventory={inventory} />
      </div>
    </section>
  );
}
