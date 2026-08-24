import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search medicines...",
}) {
  return (
    <div className="search-bar">
      <Search size={19} />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange?.("")}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
