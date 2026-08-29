import React, { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import MedicineList from "../components/MedicineList";
import MedicineForm from "../components/MedicineForm";
import Modal from "../components/Modal";
import Button from "../components/Button";

const initialMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Tablet",
    stock: 120,
    expiry: "2027-04-15",
    price: 25,
  },
  {
    id: 2,
    name: "Amoxicillin 500mg",
    category: "Capsule",
    stock: 14,
    expiry: "2026-11-20",
    price: 85,
  },
  {
    id: 3,
    name: "Cetirizine 10mg",
    category: "Tablet",
    stock: 8,
    expiry: "2027-01-10",
    price: 35,
  },
];

export default function Medicines() {
  const [medicines, setMedicines] = useState(initialMedicines);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredMedicines = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return medicines;

    return medicines.filter(
      (medicine) =>
        medicine.name.toLowerCase().includes(query) ||
        medicine.category.toLowerCase().includes(query)
    );
  }, [medicines, search]);

  const handleAddMedicine = (medicine) => {
    const newMedicine = {
      ...medicine,
      id: Date.now(),
      stock: Number(medicine.stock),
      price: Number(medicine.price),
    };

    setMedicines((prev) => [newMedicine, ...prev]);
    setIsOpen(false);
  };

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>PHARMACY INVENTORY</span>
          <h2>Medicines</h2>
          <p>Manage and search your medicine catalogue.</p>
        </div>

        <Button onClick={() => setIsOpen(true)}>
          + Add Medicine
        </Button>
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search medicines..."
      />

      <MedicineList medicines={filteredMedicines} />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add New Medicine"
      >
        <MedicineForm onSubmit={handleAddMedicine} />
      </Modal>
    </section>
  );
      }
