import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Pill,
  Package,
  ShoppingCart,
  BarChart3,
  Bell,
  Settings,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

function Dashboard() {
  return (
    <section className="page">
      <div className="hero-card">
        <span>PHARMACY INTELLIGENCE</span>
        <h2>Smarter pharmacy management.</h2>
        <p>Monitor medicines, inventory, sales and intelligent alerts from one place.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card"><span>Total Medicines</span><strong>2,486</strong><small>+12.4%</small></div>
        <div className="stat-card"><span>Available Stock</span><strong>18,420</strong><small>+8.2%</small></div>
        <div className="stat-card warning"><span>Low Stock</span><strong>184</strong><small>Needs attention</small></div>
        <div className="stat-card success"><span>Monthly Sales</span><strong>₹1.84L</strong><small>+15.8%</small></div>
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-title"><h3>Inventory Health</h3><span>Live overview</span></div>
          <div className="health-row"><span>Healthy</span><b>78%</b></div>
          <div className="progress"><i style={{ width: "78%" }} /></div>
          <div className="health-row"><span>Low Stock</span><b>15%</b></div>
          <div className="progress"><i style={{ width: "15%" }} /></div>
          <div className="health-row"><span>Critical</span><b>7%</b></div>
          <div className="progress"><i style={{ width: "7%" }} /></div>
        </div>

        <div className="panel">
          <div className="panel-title"><h3>Smart Alerts</h3><span>7 active</span></div>
          <div className="alert">⚠️ Paracetamol 500mg — Low stock</div>
          <div className="alert">⏰ Amoxicillin 500mg — Expiring soon</div>
          <div className="alert">🔴 Cetirizine 10mg — Critical stock</div>
        </div>
      </div>
    </section>
  );
}

function SimplePage({ title, text }) {
  return (
    <section className="page">
      <div className="page-heading">
        <span>PHARMAVEXA</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

const navigation = [
  ["/", "Dashboard", LayoutDashboard],
  ["/medicines", "Medicines", Pill],
  ["/inventory", "Inventory", Package],
  ["/sales", "Sales", ShoppingCart],
  ["/analytics", "Analytics", BarChart3]
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className={menu ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-logo">P</div>
          <div>
            <strong>PharmaVexa</strong>
            <small>Intelligent Pharmacy</small>
          </div>
          <button className="icon mobile-close" onClick={() => setMenu(false)}>
            <X size={20} />
          </button>
        </div>

        <nav>
          {navigation.map(([path, label, Icon]) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? "active" : ""}
              onClick={() => setMenu(false)}
            >
              <Icon size={19} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <Link to="/alerts">
            <Bell size={19} />
            <span>Alerts</span>
            <em>7</em>
          </Link>
          <Link to="/settings">
            <Settings size={19} />
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="icon mobile-menu" onClick={() => setMenu(true)}>
            <Menu size={22} />
          </button>

          <div>
            <span className="eyebrow">PHARMACY INTELLIGENCE</span>
            <h1>{location.pathname === "/" ? "Good evening, Gowtham 👋" : "PharmaVexa"}</h1>
          </div>

          <div className="header-actions">
            <button className="icon" onClick={() => setDark(!dark)}>
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="avatar">G</div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medicines" element={<SimplePage title="Medicines" text="Manage your complete medicine catalogue." />} />
          <Route path="/inventory" element={<SimplePage title="Inventory" text="Monitor stock levels and expiry risk." />} />
          <Route path="/sales" element={<SimplePage title="Sales" text="Track pharmacy sales and transactions." />} />
          <Route path="/analytics" element={<SimplePage title="Analytics" text="Understand sales and inventory performance." />} />
          <Route path="/alerts" element={<SimplePage title="Alerts" text="Review important pharmacy alerts." />} />
          <Route path="/settings" element={<SimplePage title="Settings" text="Manage your PharmaVexa preferences." />} />
        </Routes>
      </main>
    </div>
  );
                                         }
