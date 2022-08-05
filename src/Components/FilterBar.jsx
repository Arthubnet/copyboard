import React from "react";

import "./filter-bar.styles.scss";

function FilterBar({ selectedNews, setSelectedNews, type }) {
  return (
    <div className="filter-bar">
      <button
        className={`${selectedNews === type ? "active" : null}`}
        onClick={() => setSelectedNews(type)}
      >
        {type}
      </button>
    </div>
  );
}

export default FilterBar;
