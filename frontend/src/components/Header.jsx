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
  Activity,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

/* =========================================================
   DYNAMIC GREETING
========================================================= */

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 22) return "Good Evening";

  return "Good Night";
}

/* =========================================================
   PAGE TITLES
========================================================= */

const pageTitles = {
  "/": "Dashboard",
  "/medicines": "Medicines",
  "/inventory": "Inventory",
  "/sales": "Sales",
  "/analytics": "Analytics",
  "/alerts": "Alerts",
  "/settings": "Settings",
  "/profile": "Profile",
};

/* =========================================================
   HEADER
========================================================= */

export default function Header({
  darkMode,
  setDarkMode,
  onMenuClick,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [greeting, setGreeting] = useState(getGreeting());
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  /* ---------------------------------------------------------
     UPDATE GREETING EVERY MINUTE
  --------------------------------------------------------- */

  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting());
    };

    updateGreeting();

    const timer = setInterval(updateGreeting, 60000);

    return () => clearInterval(timer);
  }, []);

  /* ---------------------------------------------------------
     CLOSE DROPDOWNS WHEN PAGE CHANGES
  --------------------------------------------------------- */

  useEffect(() => {
    setNotificationsOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  /* ---------------------------------------------------------
     CLOSE ALL PANELS
  --------------------------------------------------------- */

  const closePanels = () => {
    setNotificationsOpen(false);
    setProfileOpen(false);
  };

  /* ---------------------------------------------------------
     NOTIFICATIONS
  --------------------------------------------------------- */

  const toggleNotifications = () => {
    setNotificationsOpen((previous) => !previous);
    setProfileOpen(false);
  };

  /* ---------------------------------------------------------
     PROFILE
  --------------------------------------------------------- */

  const toggleProfile = () => {
    setProfileOpen((previous) => !previous);
    setNotificationsOpen(false);
  };

  /* ---------------------------------------------------------
     NAVIGATION
  --------------------------------------------------------- */

  const goTo = (path) => {
    closePanels();
    navigate(path);
  };

  /* ---------------------------------------------------------
     CURRENT PAGE
  --------------------------------------------------------- */

  const currentPage =
    pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="top-header">

      {/* =====================================================
          LEFT SIDE
      ===================================================== */}

      <div className="header-left">

        {/* MOBILE MENU */}
        <button
          type="button"
          className="icon-button mobile-menu-button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          title="Menu"
        >
          <Menu size={21} strokeWidth={2.2} />
        </button>

        {/* GREETING */}
        <div className="header-title">

          <span>PHARMAVEXA • PHARMACY INTELLIGENCE</span>

          <h1>
            {greeting}, Gowtham
            <span className="wave"> 👋</span>
          </h1>

          <small className="header-current-page">
            {currentPage}
          </small>

        </div>

      </div>

      {/* =====================================================
          RIGHT SIDE ACTIONS
      ===================================================== */}

      <div className="header-actions">

        {/* ===================================================
            SYSTEM STATUS
        =================================================== */}

        <div className="header-system-status">
          <span className="system-status-dot" />

          <span>ONLINE</span>
        </div>

        {/* ===================================================
            THEME
        =================================================== */}

        <button
          type="button"
          className="icon-button"
          onClick={() =>
            setDarkMode((previous) => !previous)
          }
          aria-label="Toggle theme"
          title={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* ===================================================
            NOTIFICATIONS
        =================================================== */}

        <div className="header-dropdown">

          <button
            type="button"
            className={`icon-button notification-button ${
              notificationsOpen
                ? "active-button"
                : ""
            }`}
            onClick={toggleNotifications}
            aria-label="Open notifications"
            title="Notifications"
          >
            <Bell size={19} />

            <span className="notification-dot" />
          </button>

          {notificationsOpen && (
            <div className="dropdown-panel notification-panel">

              {/* HEADER */}

              <div className="dropdown-header">

                <div>
                  <strong>Notifications</strong>

                  <span>
                    3 active alerts
                  </span>
                </div>

                <button
                  type="button"
                  className="dropdown-close"
                  onClick={() =>
                    setNotificationsOpen(false)
                  }
                  aria-label="Close notifications"
                >
                  <X size={16} />
                </button>

              </div>

              {/* LOW STOCK */}

              <button
                type="button"
                className="notification-item"
                onClick={() => goTo("/alerts")}
              >

                <div className="notification-icon warning">
                  <AlertTriangle size={17} />
                </div>

                <div>
                  <strong>
                    Low Stock Alert
                  </strong>

                  <span>
                    Paracetamol 500mg needs restocking.
                  </span>
                </div>

              </button>

              {/* EXPIRY */}

              <button
                type="button"
                className="notification-item"
                onClick={() => goTo("/alerts")}
              >

                <div className="notification-icon expiry">
                  <Package size={17} />
                </div>

                <div>
                  <strong>
                    Expiry Warning
                  </strong>

                  <span>
                    Amoxicillin 500mg is expiring soon.
                  </span>
                </div>

              </button>

              {/* CRITICAL */}

              <button
                type="button"
                className="notification-item"
                onClick={() => goTo("/alerts")}
              >

                <div className="notification-icon critical">
                  <AlertTriangle size={17} />
                </div>

                <div>
                  <strong>
                    Critical Stock
                  </strong>

                  <span>
                    Cetirizine 10mg stock is very low.
                  </span>
                </div>

              </button>

              {/* VIEW ALL */}

              <button
                type="button"
                className="view-all-button"
                onClick={() => goTo("/alerts")}
              >
                View all notifications
                <span>→</span>
              </button>

            </div>
          )}

        </div>

        {/* ===================================================
            PROFILE
        =================================================== */}

        <div className="header-dropdown">

          <button
            type="button"
            className={`profile-avatar ${
              profileOpen
                ? "profile-active"
                : ""
            }`}
            onClick={toggleProfile}
            aria-label="Open Gowtham profile"
            title="Gowtham"
          >
            G
          </button>

          {profileOpen && (
            <div className="dropdown-panel profile-panel">

              {/* PROFILE HEADER */}

              <div className="profile-dropdown-top">

                <div className="large-profile-avatar">
                  G
                </div>

                <div>
                  <strong>Gowtham</strong>

                  <span>
                    Pharmacy Administrator
                  </span>
                </div>

              </div>

              {/* ONLINE STATUS */}

              <div className="profile-online">

                <Activity size={14} />

                <span>
                  System Online
                </span>

              </div>

              {/* PROFILE */}

              <button
                type="button"
                className="profile-menu-item"
                onClick={() => goTo("/profile")}
              >
                <User size={17} />

                <span>Profile</span>
              </button>

              {/* SETTINGS */}

              <button
                type="button"
                className="profile-menu-item"
                onClick={() => goTo("/settings")}
              >
                <Settings size={17} />

                <span>Settings</span>
              </button>

              <div className="profile-divider" />

              {/* CLOSE */}

              <button
                type="button"
                className="profile-menu-item logout"
                onClick={closePanels}
              >
                <LogOut size={17} />

                <span>Close Menu</span>
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}
