import React from "react";
import Table from "./Table";

export default function SalesTable({ sales = [] }) {
  const columns = [
    { key: "medicine", label: "Medicine" },
    { key: "quantity", label: "Quantity" },
    {
      key: "amount",
      label: "Amount",
      render: (value) => `₹${Number(value || 0).toLocaleString("en-IN")}`,
    },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (value) => value || "Completed",
    },
  ];

  return (
    <Table
      columns={columns}
      data={sales}
      emptyMessage="No sales records available."
    />
  );
}
