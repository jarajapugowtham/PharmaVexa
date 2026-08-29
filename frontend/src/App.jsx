import React, { useState } from "react";
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

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className={`app ${darkMode ? "dark-mode" : ""}`}>
          <Navbar />

          <div className="app-layout">
            <div className={menuOpen ? "sidebar-wrapper open" : "sidebar-wrapper"}>
              <Sidebar onNavigate={closeMenu} />
            </div>

            {menuOpen && (
              <button
                className="mobile-overlay"
                onClick={closeMenu}
                aria-label="Close menu"
              />
            )}

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
              </Routes>

              <Footer />
            </main>
          </div>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
