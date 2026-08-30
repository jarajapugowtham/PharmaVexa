import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

import Dashboard from "./pages/Dashboard";
import Medicines from "./pages/Medicines";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* -----------------------------------------
     MOBILE MENU
  ----------------------------------------- */

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* Close mobile menu when screen becomes desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Prevent background scrolling while mobile menu is open */
  useEffect(() => {
    if (menuOpen && window.innerWidth <= 800) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className={`app ${darkMode ? "dark-mode" : ""}`}>

          {/* TOP NAVBAR */}
          <Navbar />

          <div className="app-layout">

            {/* SIDEBAR */}
            <div
              className={`sidebar-wrapper ${
                menuOpen ? "open" : ""
              }`}
            >
              <Sidebar onNavigate={closeMenu} />
            </div>

            {/* MOBILE BACKDROP */}
            {menuOpen && (
              <button
                type="button"
                className="mobile-overlay"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              />
            )}

            {/* MAIN CONTENT */}
            <main className="main-content">

              <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onMenuClick={toggleMenu}
              />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/medicines" element={<Medicines />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />

                {/* Fallback */}
                <Route path="*" element={<Dashboard />} />
              </Routes>

              <Footer />

            </main>
          </div>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
      }
