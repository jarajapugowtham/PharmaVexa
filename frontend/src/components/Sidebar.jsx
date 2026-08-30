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
Activity,
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

{/* ================================  
      PHARMAVEXA BRAND  
  ================================= */}  

  <div className="sidebar-brand">  
    <div className="brand-icon">  
      <span>P</span>  
    </div>  

    <div className="sidebar-brand-text">  
      <strong>PharmaVexa</strong>  
      <small>INTELLIGENT PHARMACY</small>  
    </div>  
  </div>  

  {/* ================================  
      MAIN MENU  
  ================================= */}  

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
            <Icon size={19} strokeWidth={2} />  
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

  {/* ================================  
      SYSTEM  
  ================================= */}  

  <div className="sidebar-section sidebar-system">  

    <div className="sidebar-section-heading">  
      <span>SYSTEM</span>  
    </div>  

    <nav className="sidebar-nav">  

      {/* ALERTS */}  

      <NavLink  
        to="/alerts"  
        onClick={onNavigate}  
        className={({ isActive }) =>  
          `sidebar-link ${isActive ? "active" : ""}`  
        }  
      >  
        <span className="sidebar-link-icon">  
          <Bell size={19} strokeWidth={2} />  
        </span>  

        <span className="sidebar-link-name">  
          Alerts  
        </span>  

        <b className="sidebar-badge">  
          7  
        </b>  
      </NavLink>  

      {/* SETTINGS */}  

      <NavLink  
        to="/settings"  
        onClick={onNavigate}  
        className={({ isActive }) =>  
          `sidebar-link ${isActive ? "active" : ""}`  
        }  
      >  
        <span className="sidebar-link-icon">  
          <Settings size={19} strokeWidth={2} />  
        </span>  

        <span className="sidebar-link-name">  
          Settings  
        </span>  

        <ChevronRight  
          className="sidebar-arrow"  
          size={15}  
        />  
      </NavLink>  

      {/* PROFILE */}  

      <NavLink  
        to="/profile"  
        onClick={onNavigate}  
        className={({ isActive }) =>  
          `sidebar-link ${isActive ? "active" : ""}`  
        }  
      >  
        <span className="sidebar-link-icon">  
          <User size={19} strokeWidth={2} />  
        </span>  

        <span className="sidebar-link-name">  
          Profile  
        </span>  

        <ChevronRight  
          className="sidebar-arrow"  
          size={15}  
        />  
      </NavLink>  

    </nav>  
  </div>  

  {/* ================================  
      SIDEBAR STATUS  
  ================================= */}  

  <div className="sidebar-footer">  

    <div className="sidebar-status-icon">  
      <Activity size={16} />  
    </div>  

    <div className="sidebar-status-text">  
      <strong>System Online</strong>  
      <small>All services operational</small>  
    </div>  

    <span className="online-dot" />  

  </div>  

</aside>

);
  }
