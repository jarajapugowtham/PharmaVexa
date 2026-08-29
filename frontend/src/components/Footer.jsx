import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} PharmaVexa. All rights reserved.
      </p>

      <span>Intelligent Pharmacy Management</span>
    </footer>
  );
}
