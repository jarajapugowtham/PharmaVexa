import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Pill,
  Package,
  ShoppingCart,
  BarChart3,
  Bell,
  Settings,
  User,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Medicines", path: "/medicines", icon: Pill },
  { name: "Inventory", path: "/inventory", icon: Package },
  { name: "Sales", path: "/sales", icon: ShoppingCart },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
];

export default function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">P</div>

        <div>
          <strong>PharmaVexa</strong>
          <small>Intelligent Pharmacy</small>
        </div>
      </div>

      <div className="sidebar-section">
        <span className="sidebar-label">MAIN MENU</span>

        {menuItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onNavigate}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Icon size={19} />
            <span>{name}</span>
          </NavLink>
        ))}
      </div>

      <div className="sidebar-bottom">
        <NavLink to="/alerts" onClick={onNavigate}>
          <Bell size={19} />
          <span>Alerts</span>
          <b>7</b>
        </NavLink>

        <NavLink to="/settings" onClick={onNavigate}>
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

        <NavLink to="/profile" onClick={onNavigate}>
          <User size={19} />
          <span>Profile</span>
        </NavLink>
      </div>
    </aside>
  );
}
