import React, { useState, useEffect } from "react";

import "./news.styles.scss";
import Wrapper from "../Components/Wrapper";
import FilterBars from "../Components/FilterBars";
import { newsData } from "../data";
import NewsContainer from "../Components/NewsContainer";

function News() {
  let [selectedNews, setSelectedNews] = useState("fresh");

  return (
    <Wrapper flex={"flex"} id="news" title="Top News">
      <FilterBars
        selectedNews={selectedNews}
        setSelectedNews={setSelectedNews}
      />

      {newsData.map((newsCategory, i) => (
        <NewsContainer
          key={i}
          newsCategory={newsCategory}
          type={newsCategory.type}
          selectedNews={selectedNews}
          setSelectedNews={setSelectedNews}
        />
      ))}
    </Wrapper>
  );
}

export default News;
