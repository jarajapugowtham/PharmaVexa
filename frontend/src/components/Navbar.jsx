import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Pill,
  Package,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

const links = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Medicines", path: "/medicines", icon: Pill },
  { name: "Inventory", path: "/inventory", icon: Package },
  { name: "Sales", path: "/sales", icon: ShoppingCart },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">P</div>
        <div>
          <strong>PharmaVexa</strong>
          <small>Intelligent Pharmacy</small>
        </div>
      </div>

      <div className="navbar-links">
        {links.map(({ name, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={location.pathname === path ? "active" : ""}
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
   }
