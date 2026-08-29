import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Gowtham",
    email: "admin@pharmavexa.com",
    role: "Pharmacy Administrator",
    phone: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "pharmavexa-profile",
      JSON.stringify(profile)
    );

    setSaved(true);
  };

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <span>ACCOUNT MANAGEMENT</span>
          <h2>Profile</h2>
          <p>Manage your PharmaVexa administrator profile.</p>
        </div>
      </div>

      <div className="profile-layout">
        <div className="profile-card">
          <div className="profile-avatar-large">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <h3>{profile.name}</h3>
          <p>{profile.role}</p>
          <span>{profile.email}</span>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />

          <FormInput
            label="Role"
            name="role"
            value={profile.role}
            onChange={handleChange}
            placeholder="Enter role"
          />

          <div className="settings-actions">
            <Button type="submit">
              Save Profile
            </Button>

            {saved && (
              <span className="save-success">
                ✓ Profile saved successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
      }
