import React, { useState, useEffect } from "react";

import "./news.styles.scss";
/* Containers */
import Wrapper from "../Components/Wrapper";
import FilterBars from "../Components/FilterBars";
import NewsContainer from "../Components/NewsContainer";

import { newsData } from "../data";

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

function News() {
  let [count, countSet] = useState(1);

  return (
    <Wrapper flex={"flex"} id="news" title="Top News">
      <FilterBars count={count} countSet={countSet} />

      {newsData
        .filter((a, i) => i > 0)
        .map((container, i) => (
          <NewsContainer
            container={container}
            type={container.type}
            count={count}
            countSet={countSet}
          />
        ))}
    </Wrapper>
  );
}

export default News;
