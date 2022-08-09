import React from "react";

import "./filter-bar.styles.scss";

function FilterBar({ item, countSet, count, type }) {
  return (
    <div className="filter-bar">
      <button
        className={`${count === item.id ? "active" : null}`}
        onClick={() => countSet(item.id)}
      >
        {type}
      </button>
    </div>
  );
}

export default FilterBar;
