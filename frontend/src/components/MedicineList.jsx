import React from "react";
import MedicineCard from "./MedicineCard";
import EmptyState from "./EmptyState";

export default function MedicineList({
  medicines = [],
  onEdit,
  onDelete,
}) {
  if (medicines.length === 0) {
    return (
      <EmptyState
        title="No medicines found"
        message="Try changing your search or filters, or add a new medicine."
      />
    );
  }

  return (
    <div className="medicine-list">
      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id || medicine._id || medicine.name}
          name={medicine.name}
          category={medicine.category}
          stock={medicine.stock}
          expiry={medicine.expiry}
          price={medicine.price}
          onEdit={() => onEdit?.(medicine)}
          onDelete={() => onDelete?.(medicine)}
        />
      ))}
    </div>
  );
}
