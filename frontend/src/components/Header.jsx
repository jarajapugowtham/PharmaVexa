import React from "react";
import {
  Bell,
  Moon,
  Sun,
  Menu,
  User,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({
  darkMode,
  setDarkMode,
  onMenuClick,
}) {
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setDarkMode((previous) => !previous);
  };

  const handleNotifications = () => {
    navigate("/alerts");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header className="top-header">

      {/* MOBILE MENU */}
      <button
        type="button"
        className="icon-button mobile-menu-button"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
        title="Menu"
      >
        <Menu size={21} />
      </button>

      {/* PAGE TITLE */}
      <div className="header-title">
        <span>PHARMACY INTELLIGENCE</span>

        <h1>
          Good evening, Gowtham 👋
        </h1>
      </div>

      {/* HEADER ACTIONS */}
      <div className="header-actions">

        {/* THEME */}
        <button
          type="button"
          className="icon-button"
          onClick={handleThemeToggle}
          aria-label={
            darkMode
              ? "Switch to light theme"
              : "Switch to dark theme"
          }
          title={
            darkMode
              ? "Light mode"
              : "Dark mode"
          }
        >
          {darkMode ? (
            <Sun size={19} />
          ) : (
            <Moon size={19} />
          )}
        </button>

        {/* NOTIFICATIONS */}
        <button
          type="button"
          className="icon-button notification-button"
          onClick={handleNotifications}
          aria-label="Open notifications"
          title="Notifications"
        >
          <Bell size={19} />

          <span
            className="notification-dot"
            aria-hidden="true"
          />
        </button>

        {/* PROFILE */}
        <button
          type="button"
          className="profile-avatar"
          onClick={handleProfile}
          aria-label="Open profile"
          title="Profile"
        >
          G
        </button>

      </div>
    </header>
  );
}
