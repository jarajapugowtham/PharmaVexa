import React from "react";
import Table from "./Table";

export default function InventoryTable({ inventory = [] }) {
  const columns = [
    { key: "medicine", label: "Medicine" },
    { key: "stock", label: "Stock" },
    { key: "reorderLevel", label: "Reorder Level" },
    { key: "expiry", label: "Expiry" },
    {
      key: "status",
      label: "Status",
      render: (value) => value || "Healthy",
    },
  ];

  return (
    <Table
      columns={columns}
      data={inventory}
      emptyMessage="No inventory records available."
    />
  );
}
