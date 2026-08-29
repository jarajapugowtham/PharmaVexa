import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import SelectInput from "../components/SelectInput";

export default function Settings() {
  const [settings, setSettings] = useState({
    pharmacyName: "PharmaVexa Pharmacy",
    email: "admin@pharmavexa.com",
    phone: "",
    currency: "INR",
    lowStock: "20",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "pharmavexa-settings",
      JSON.stringify(settings)
    );

    setSaved(true);
  };

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>SYSTEM CONFIGURATION</span>
          <h2>Settings</h2>
          <p>Manage your PharmaVexa pharmacy preferences.</p>
        </div>
      </div>

      <form className="settings-form" onSubmit={handleSubmit}>
        <FormInput
          label="Pharmacy Name"
          name="pharmacyName"
          value={settings.pharmacyName}
          onChange={handleChange}
          placeholder="Enter pharmacy name"
          required
        />

        <FormInput
          label="Admin Email"
          name="email"
          type="email"
          value={settings.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={settings.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />

        <SelectInput
          label="Currency"
          name="currency"
          value={settings.currency}
          onChange={handleChange}
          options={[
            { value: "INR", label: "Indian Rupee (₹)" },
            { value: "USD", label: "US Dollar ($)" },
            { value: "EUR", label: "Euro (€)" },
          ]}
        />

        <FormInput
          label="Low Stock Alert Level"
          name="lowStock"
          type="number"
          value={settings.lowStock}
          onChange={handleChange}
          placeholder="Enter stock level"
          required
        />

        <div className="settings-actions">
          <Button type="submit">
            Save Settings
          </Button>

          {saved && (
            <span className="save-success">
              ✓ Settings saved successfully
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
