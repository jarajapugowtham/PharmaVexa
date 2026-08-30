import React from "react";
import { Pill, Activity } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">

        <div className="navbar-logo">
          <Pill size={24} strokeWidth={2.4} />
        </div>

        <div className="navbar-brand-text">
          <strong>PharmaVexa</strong>
          <span>INTELLIGENT PHARMACY</span>
        </div>

      </div>

      <div className="navbar-status">
        <Activity size={15} />
        <span>System Online</span>
      </div>

    </nav>
  );
}
