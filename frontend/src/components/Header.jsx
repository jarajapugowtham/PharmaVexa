import React, { useEffect, useState } from "react";
import {
  Bell,
  Moon,
  Sun,
  Menu,
  User,
  Settings,
  LogOut,
  AlertTriangle,
  Package,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";

  return "Good night";
}

export default function Header({
  darkMode,
  setDarkMode,
  onMenuClick,
}) {
  const navigate = useNavigate();

  const [greeting, setGreeting] = useState(getGreeting());
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting());
    };

    updateGreeting();

    const timer = setInterval(updateGreeting, 60000);

    return () => clearInterval(timer);
  }, []);

  const closePanels = () => {
    setNotificationsOpen(false);
    setProfileOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen((previous) => !previous);
    setProfileOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen((previous) => !previous);
    setNotificationsOpen(false);
  };

  const goTo = (path) => {
    closePanels();
    navigate(path);
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
        <Menu size={22} />
      </button>

      {/* GREETING */}
      <div className="header-title">
        <span>PHARMACY INTELLIGENCE</span>

        <h1>
          {greeting}, Gowtham <span className="wave">👋</span>
        </h1>
      </div>

      {/* ACTIONS */}
      <div className="header-actions">

        {/* THEME */}
        <button
          type="button"
          className="icon-button"
          onClick={() => setDarkMode((previous) => !previous)}
          aria-label="Toggle theme"
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? (
            <Sun size={19} />
          ) : (
            <Moon size={19} />
          )}
        </button>

        {/* NOTIFICATIONS */}
        <div className="header-dropdown">
          <button
            type="button"
            className={`icon-button notification-button ${
              notificationsOpen ? "active-button" : ""
            }`}
            onClick={toggleNotifications}
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell size={19} />
            <span className="notification-dot" />
          </button>

          {notificationsOpen && (
            <div className="dropdown-panel notification-panel">

              <div className="dropdown-header">
                <div>
                  <strong>Notifications</strong>
                  <span>3 active alerts</span>
                </div>

                <button
                  type="button"
                  className="dropdown-close"
                  onClick={() => setNotificationsOpen(false)}
                  aria-label="Close notifications"
                >
                  <X size={16} />
                </button>
              </div>

              <button
                type="button"
                className="notification-item"
                onClick={() => goTo("/alerts")}
              >
                <div className="notification-icon warning">
                  <AlertTriangle size={17} />
                </div>

                <div>
                  <strong>Low Stock Alert</strong>
                  <span>Paracetamol 500mg needs restocking.</span>
                </div>
              </button>

              <button
                type="button"
                className="notification-item"
                onClick={() => goTo("/alerts")}
              >
                <div className="notification-icon expiry">
                  <Package size={17} />
                </div>

                <div>
                  <strong>Expiry Warning</strong>
                  <span>Amoxicillin 500mg is expiring soon.</span>
                </div>
              </button>

              <button
                type="button"
                className="notification-item"
                onClick={() => goTo("/alerts")}
              >
                <div className="notification-icon critical">
                  <AlertTriangle size={17} />
                </div>

                <div>
                  <strong>Critical Stock</strong>
                  <span>Cetirizine 10mg stock is very low.</span>
                </div>
              </button>

              <button
                type="button"
                className="view-all-button"
                onClick={() => goTo("/alerts")}
              >
                View all notifications →
              </button>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="header-dropdown">
          <button
            type="button"
            className={`profile-avatar ${
              profileOpen ? "profile-active" : ""
            }`}
            onClick={toggleProfile}
            aria-label="Open profile"
            title="Gowtham"
          >
            G
          </button>

          {profileOpen && (
            <div className="dropdown-panel profile-panel">

              <div className="profile-dropdown-top">
                <div className="large-profile-avatar">
                  G
                </div>

                <div>
                  <strong>Gowtham</strong>
                  <span>Pharmacy Administrator</span>
                </div>
              </div>

              <button
                type="button"
                className="profile-menu-item"
                onClick={() => goTo("/profile")}
              >
                <User size={17} />
                Profile
              </button>

              <button
                type="button"
                className="profile-menu-item"
                onClick={() => goTo("/settings")}
              >
                <Settings size={17} />
                Settings
              </button>

              <div className="profile-divider" />

              <button
                type="button"
                className="profile-menu-item logout"
                onClick={closePanels}
              >
                <LogOut size={17} />
                Close menu
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
          }
