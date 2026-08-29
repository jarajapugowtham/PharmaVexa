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
  const [category, setCategory] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [deleteMedicine, setDeleteMedicine] = useState(null);
  const [message, setMessage] = useState("");

  const categories = useMemo(() => {
    return ["All", ...new Set(medicines.map((medicine) => medicine.category))];
  }, [medicines]);

  const getStockStatus = (stock) => {
    if (stock <= 5) return "Critical";
    if (stock <= 15) return "Low";
    return "Healthy";
  };

  const filteredMedicines = useMemo(() => {
    const query = search.toLowerCase().trim();

    return medicines.filter((medicine) => {
      const matchesSearch =
        !query ||
        medicine.name.toLowerCase().includes(query) ||
        medicine.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || medicine.category === category;

      const status = getStockStatus(medicine.stock);

      const matchesStock =
        stockFilter === "All" || status === stockFilter;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [medicines, search, category, stockFilter]);

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleAddMedicine = (medicine) => {
    const newMedicine = {
      ...medicine,
      id: Date.now(),
      stock: Number(medicine.stock),
      price: Number(medicine.price),
    };

    setMedicines((prev) => [newMedicine, ...prev]);
    setIsOpen(false);
    showMessage("Medicine added successfully.");
  };

  const handleUpdateMedicine = (medicine) => {
    setMedicines((prev) =>
      prev.map((item) =>
        item.id === editingMedicine.id
          ? {
              ...medicine,
              id: editingMedicine.id,
              stock: Number(medicine.stock),
              price: Number(medicine.price),
            }
          : item
      )
    );

    setEditingMedicine(null);
    showMessage("Medicine updated successfully.");
  };

  const handleDeleteMedicine = () => {
    if (!deleteMedicine) return;

    setMedicines((prev) =>
      prev.filter((medicine) => medicine.id !== deleteMedicine.id)
    );

    setDeleteMedicine(null);
    showMessage("Medicine deleted successfully.");
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setStockFilter("All");
  };

  return (
    <section className="page">

      {/* HEADER */}
      <div className="page-heading">
        <div>
          <span>PHARMACY INVENTORY</span>
          <h2>Medicines</h2>
          <p>
            Manage, search, update and monitor your medicine catalogue.
          </p>
        </div>

        <Button onClick={() => setIsOpen(true)}>
          + Add Medicine
        </Button>
      </div>

      {/* TOAST */}
      {message && (
        <div
          className="toast success"
          style={{
            marginBottom: "18px",
          }}
        >
          <span>{message}</span>
        </div>
      )}

      {/* SEARCH */}
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search by medicine name or category..."
      />

      {/* FILTERS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            minHeight: "42px",
            padding: "0 12px",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            background: "var(--surface)",
            color: "var(--text)",
          }}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "All" ? "All Categories" : item}
            </option>
          ))}
        </select>

        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          style={{
            minHeight: "42px",
            padding: "0 12px",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            background: "var(--surface)",
            color: "var(--text)",
          }}
        >
          <option value="All">All Stock</option>
          <option value="Healthy">Healthy Stock</option>
          <option value="Low">Low Stock</option>
          <option value="Critical">Critical Stock</option>
        </select>

        {(search || category !== "All" || stockFilter !== "All") && (
          <button
            type="button"
            className="custom-button secondary small"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* RESULTS */}
      <div
        style={{
          marginBottom: "12px",
          color: "var(--muted)",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        Showing {filteredMedicines.length} of {medicines.length} medicines
      </div>

      {/* MEDICINE LIST */}
      <MedicineList
        medicines={filteredMedicines}
        onEdit={(medicine) => setEditingMedicine(medicine)}
        onDelete={(medicine) => setDeleteMedicine(medicine)}
      />

      {/* ADD MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add New Medicine"
      >
        <MedicineForm onSubmit={handleAddMedicine} />
      </Modal>

      {/* EDIT MODAL */}
      <Modal
        isOpen={Boolean(editingMedicine)}
        onClose={() => setEditingMedicine(null)}
        title="Edit Medicine"
      >
        {editingMedicine && (
          <MedicineForm
            initialData={editingMedicine}
            onSubmit={handleUpdateMedicine}
          />
        )}
      </Modal>

      {/* DELETE CONFIRMATION */}
      {deleteMedicine && (
        <div className="modal-overlay">
          <div className="confirm-dialog">

            <button
              type="button"
              className="confirm-close"
              onClick={() => setDeleteMedicine(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="confirm-icon">
              !
            </div>

            <h2>Delete Medicine?</h2>

            <p>
              Are you sure you want to delete{" "}
              <strong>{deleteMedicine.name}</strong>?
              This action cannot be undone.
            </p>

            <div className="confirm-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => setDeleteMedicine(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="danger-button"
                onClick={handleDeleteMedicine}
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
    }
