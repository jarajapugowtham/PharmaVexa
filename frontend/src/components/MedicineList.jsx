import React from "react";
import MedicineCard from "./MedicineCard";
import EmptyState from "./EmptyState";

export default function MedicineList({ medicines = [] }) {
  if (medicines.length === 0) {
    return (
      <EmptyState
        title="No medicines found"
        message="Add a medicine to see it here."
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
        />
      ))}
    </div>
  );
}
