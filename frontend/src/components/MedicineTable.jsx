import React from "react";
import Table from "./Table";

export default function MedicineTable({ medicines = [] }) {
  const columns = [
    { key: "name", label: "Medicine" },
    { key: "category", label: "Category" },
    { key: "stock", label: "Stock" },
    { key: "expiry", label: "Expiry" },
    {
      key: "price",
      label: "Price",
      render: (value) => `₹${Number(value || 0).toLocaleString("en-IN")}`,
    },
  ];

  return (
    <Table
      columns={columns}
      data={medicines}
      emptyMessage="No medicines available."
    />
  );
}
