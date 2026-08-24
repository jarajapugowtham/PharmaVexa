import React from "react";
import { Inbox } from "lucide-react";

export default function EmptyState({
  title = "No data found",
  message = "There is nothing to display here yet.",
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Inbox size={28} />
      </div>

      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
