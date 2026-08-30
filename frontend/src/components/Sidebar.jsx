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
  ChevronRight,
} from "lucide-react";

const mainItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Medicines",
    path: "/medicines",
    icon: Pill,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: Package,
  },
  {
    name: "Sales",
    path: "/sales",
    icon: ShoppingCart,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar">

      {/* BRAND */}
      <div className="sidebar-brand">
        <div className="brand-icon">
          P
        </div>

        <div>
          <strong>PharmaVexa</strong>
          <small>Intelligent Pharmacy</small>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="sidebar-section">

        <div className="sidebar-section-heading">
          <span>MAIN MENU</span>
        </div>

        <nav className="sidebar-nav">
          {mainItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <span className="sidebar-link-icon">
                <Icon size={19} />
              </span>

              <span className="sidebar-link-name">
                {name}
              </span>

              <ChevronRight
                className="sidebar-arrow"
                size={15}
              />
            </NavLink>
          ))}
        </nav>

      </div>

      {/* SYSTEM SECTION */}
      <div className="sidebar-section sidebar-system">

        <div className="sidebar-section-heading">
          <span>SYSTEM</span>
        </div>

        <nav className="sidebar-nav">

          <NavLink
            to="/alerts"
            onClick={onNavigate}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-link-icon">
              <Bell size={19} />
            </span>

            <span className="sidebar-link-name">
              Alerts
            </span>

            <b className="sidebar-badge">7</b>
          </NavLink>

          <NavLink
            to="/settings"
            onClick={onNavigate}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-link-icon">
              <Settings size={19} />
            </span>

            <span className="sidebar-link-name">
              Settings
            </span>
          </NavLink>

          <NavLink
            to="/profile"
            onClick={onNavigate}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-link-icon">
              <User size={19} />
            </span>

            <span className="sidebar-link-name">
              Profile
            </span>
          </NavLink>

        </nav>

      </div>

      {/* SIDEBAR FOOTER */}
      <div className="sidebar-footer">
        <span className="online-dot" />
        <div>
          <strong>System Online</strong>
          <small>All services operational</small>
        </div>
      </div>

    </aside>
  );
      }
