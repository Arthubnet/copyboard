import React from "react";

import "./filter-bars.styles.scss";
import FilterBar from "./FilterBar";
import { newsData } from "../data";

function FilterBars({ setSelectedNews, selectedNews }) {
  return (
    <div className="filter-bars">
      {newsData.map((item, index) => (
        <FilterBar
          key={index}
          type={item.type}
          setSelectedNews={setSelectedNews}
          selectedNews={selectedNews}
        />
      ))}
    </div>
  );
}

export default FilterBars;
