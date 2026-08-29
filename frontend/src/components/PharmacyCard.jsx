import React from "react";
import { Building2, MapPin, Phone, Clock } from "lucide-react";

export default function PharmacyCard({
  name = "PharmaVexa Pharmacy",
  address = "Main Branch",
  phone = "Contact pharmacy",
  hours = "Open today",
}) {
  return (
    <article className="pharmacy-card">
      <div className="pharmacy-icon">
        <Building2 size={24} />
      </div>

      <div className="pharmacy-info">
        <h3>{name}</h3>

        <p>
          <MapPin size={15} />
          {address}
        </p>

        <p>
          <Phone size={15} />
          {phone}
        </p>

        <p>
          <Clock size={15} />
          {hours}
        </p>
      </div>
    </article>
  );
}
