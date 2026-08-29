import React, { useState } from "react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import Textarea from "./Textarea";
import Button from "./Button";

export default function MedicineForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    manufacturer: "",
    price: "",
    stock: "",
    expiry: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form className="medicine-form" onSubmit={handleSubmit}>
      <FormInput
        label="Medicine Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter medicine name"
        required
      />

      <SelectInput
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Select category"
        options={[
          { value: "tablet", label: "Tablet" },
          { value: "capsule", label: "Capsule" },
          { value: "syrup", label: "Syrup" },
          { value: "injection", label: "Injection" },
          { value: "other", label: "Other" },
        ]}
        required
      />

      <FormInput
        label="Manufacturer"
        name="manufacturer"
        value={form.manufacturer}
        onChange={handleChange}
        placeholder="Enter manufacturer"
      />

      <FormInput
        label="Price"
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Enter price"
        required
      />

      <FormInput
        label="Stock Quantity"
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="Enter stock quantity"
        required
      />

      <FormInput
        label="Expiry Date"
        name="expiry"
        type="date"
        value={form.expiry}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Enter medicine description"
      />

      <Button type="submit">Add Medicine</Button>
    </form>
  );
}
