import React from "react";

import "./filter-bars.styles.scss";
import FilterBar from "./FilterBar";
import { newsData } from "../data";

function FilterBars({ countSet, count }) {
  return (
    <div className="filter-bars">
      {newsData
        .filter((a, i) => i > 0)
        .map((item, index) => (
          <FilterBar
            key={item.id}
            countSet={countSet}
            count={count}
            item={item}
            type={item.type}
          />
        ))}
    </div>
  );
}

export default FilterBars;
