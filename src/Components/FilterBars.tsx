import React, { FC } from "react";

import "./filter-bars.styles.scss";
import FilterBar from "./FilterBar";
import { newsData } from "../data";

type Props = {
  countSet: (id: number) => void;
  count: number;
};

const FilterBars: FC<Props> = ({ countSet, count }) => {
  return (
    <div className="filter-bars">
      {newsData
        .filter((_: any, i: number) => i > 0)
        .map((item: any) => (
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
};

export default FilterBars;
