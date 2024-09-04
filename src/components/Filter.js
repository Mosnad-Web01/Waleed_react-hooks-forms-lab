import React from "react";

function Filter({ searchTerm, onSearchChange }) {
  const handleInputChange = (event) => {
    if (typeof onSearchChange === "function") {
      onSearchChange(event.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search items..."
      />
    </div>
  );
}

export default Filter;
