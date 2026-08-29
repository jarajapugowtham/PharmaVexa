import React, { useRef } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search medicines...",
}) {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  const handleClear = () => {
    onChange?.("");
    inputRef.current?.focus();
  };

  return (
    <div className="search-bar" role="search">
      <Search size={19} aria-hidden="true" />

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="off"
      />

      {value.trim() && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          title="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
