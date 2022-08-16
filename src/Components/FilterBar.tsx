import React, { FC } from "react";

import "./filter-bar.styles.scss";

type Props = {
  item: {
    id: number;
  };
  countSet: (id: any) => void;
  count: number;
  type: string;
};

const FilterBar: FC<Props> = ({ item, countSet, count, type }) => {
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
};

export default FilterBar;
