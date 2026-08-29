import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import Textarea from "./Textarea";
import Button from "./Button";

const emptyForm = {
  name: "",
  category: "",
  manufacturer: "",
  price: "",
  stock: "",
  expiry: "",
  description: "",
};

const categories = [
  { value: "Tablet", label: "Tablet" },
  { value: "Capsule", label: "Capsule" },
  { value: "Syrup", label: "Syrup" },
  { value: "Injection", label: "Injection" },
  { value: "Other", label: "Other" },
];

export default function MedicineForm({
  onSubmit,
  initialData = null,
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const isEditing = Boolean(initialData);

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        category:
          initialData.category
            ? initialData.category.charAt(0).toUpperCase() +
              initialData.category.slice(1).toLowerCase()
            : "",
        manufacturer: initialData.manufacturer || "",
        price:
          initialData.price !== undefined
            ? String(initialData.price)
            : "",
        stock:
          initialData.stock !== undefined
            ? String(initialData.stock)
            : "",
        expiry: initialData.expiry || "",
        description: initialData.description || "",
      });
    } else {
      setForm(emptyForm);
    }

    setErrors({});
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const name = form.name.trim();
    const price = Number(form.price);
    const stock = Number(form.stock);

    if (!name) {
      newErrors.name = "Medicine name is required.";
    } else if (name.length < 2) {
      newErrors.name = "Medicine name must contain at least 2 characters.";
    }

    if (!form.category) {
      newErrors.category = "Please select a category.";
    }

    if (form.price === "") {
      newErrors.price = "Price is required.";
    } else if (!Number.isFinite(price) || price < 0) {
      newErrors.price = "Enter a valid price of 0 or more.";
    }

    if (form.stock === "") {
      newErrors.stock = "Stock quantity is required.";
    } else if (
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      newErrors.stock = "Stock must be a whole number of 0 or more.";
    }

    if (!form.expiry) {
      newErrors.expiry = "Expiry date is required.";
    } else {
      const expiryDate = new Date(form.expiry);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (Number.isNaN(expiryDate.getTime())) {
        newErrors.expiry = "Enter a valid expiry date.";
      } else if (expiryDate < today) {
        newErrors.expiry = "Expiry date cannot be in the past.";
      }
    }

    if (form.description.length > 500) {
      newErrors.description =
        "Description cannot exceed 500 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const cleanedMedicine = {
      name: form.name.trim(),
      category: form.category,
      manufacturer: form.manufacturer.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
      expiry: form.expiry,
      description: form.description.trim(),
    };

    try {
      setSubmitting(true);

      await Promise.resolve(onSubmit?.(cleanedMedicine));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="medicine-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <FormInput
        label="Medicine Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter medicine name"
        required
        autoComplete="off"
      />

      {errors.name && (
        <span className="form-error">
          {errors.name}
        </span>
      )}

      <SelectInput
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Select category"
        options={categories}
        required
      />

      {errors.category && (
        <span className="form-error">
          {errors.category}
        </span>
      )}

      <FormInput
        label="Manufacturer"
        name="manufacturer"
        value={form.manufacturer}
        onChange={handleChange}
        placeholder="Enter manufacturer"
        autoComplete="organization"
      />

      <FormInput
        label="Price"
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Enter price"
        min="0"
        step="0.01"
        required
      />

      {errors.price && (
        <span className="form-error">
          {errors.price}
        </span>
      )}

      <FormInput
        label="Stock Quantity"
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="Enter stock quantity"
        min="0"
        step="1"
        required
      />

      {errors.stock && (
        <span className="form-error">
          {errors.stock}
        </span>
      )}

      <FormInput
        label="Expiry Date"
        name="expiry"
        type="date"
        value={form.expiry}
        onChange={handleChange}
        required
      />

      {errors.expiry && (
        <span className="form-error">
          {errors.expiry}
        </span>
      )}

      <Textarea
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Enter medicine description"
        maxLength={500}
      />

      {errors.description && (
        <span className="form-error">
          {errors.description}
        </span>
      )}

      <Button type="submit" disabled={submitting}>
        {submitting
          ? "Saving..."
          : isEditing
          ? "Save Changes"
          : "Add Medicine"}
      </Button>
    </form>
  );
      }
