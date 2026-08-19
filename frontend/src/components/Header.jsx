import React from "react";
import { Bell, Moon, Sun, Menu } from "lucide-react";

export default function Header({ darkMode, setDarkMode, onMenuClick }) {
  return (
    <header className="top-header">
      <button
        className="icon-button mobile-menu-button"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>

      <div className="header-title">
        <span>PHARMACY INTELLIGENCE</span>
        <h1>Good evening, Gowtham 👋</h1>
      </div>

      <div className="header-actions">
        <button
          className="icon-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="profile-avatar" title="Profile">
          G
        </div>
      </div>
    </header>
  );
}
