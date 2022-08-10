import React from "react";

import "./news-column.styles.scss";
import NewsItem from "./NewsItem";
/* Framer Motion */
import { motion } from "framer-motion";

function NewsColumn({ item, setModalActive, setModalNews }) {
  return (
    <div className="news__column">
      {Object.values(item).map((item, i) => (
        <NewsItem
          key={i}
          item={item}
          delay={0.3 * i}
          setModalActive={setModalActive}
          setModalNews={setModalNews}
        />
      ))}
    </div>
  );
}

export default NewsColumn;
