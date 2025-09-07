import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2>
          <span role="img" aria-label="price">💰</span> Price Range
        </h2>
        <input
          className="sidebar-range"
          type="range"
          min="940"
          max="189000"
        />
        <div className="range-values">
          <span className="range-min">940৳</span>
          <span className="range-max">189,000৳</span>
        </div>
      </div>

      <div className="sidebar-section">
        <h2>
          <span role="img" aria-label="availability">📦</span> Availability
        </h2>
        <div className="sidebar-checkboxes">
          <label>
            <input type="checkbox" /> In Stock
          </label>
          <label>
            <input type="checkbox" /> Pre Order
          </label>
          <label>
            <input type="checkbox" /> Up Coming
          </label>
        </div>
      </div>
    </aside>
  );
}
