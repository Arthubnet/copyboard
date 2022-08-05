import React from "react";

import "./news-column.styles.scss";
import NewsItem from "./News-item";

function NewsColumn({ item }) {
  return (
    <div className="news__column">
      {Object.values(item).map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsColumn;
