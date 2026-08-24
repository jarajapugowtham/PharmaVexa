import React from "react";

export default function Card({
  children,
  title,
  subtitle,
  className = "",
}) {
  return (
    <section className={`card ${className}`}>
      {(title || subtitle) && (
        <div className="card-header">
          <div>
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="card-body">
        {children}
      </div>
    </section>
  );
}
