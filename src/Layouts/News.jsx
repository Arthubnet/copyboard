import React, { useState, useEffect } from "react";

import "./news.styles.scss";
/* Containers */
import Wrapper from "../Components/Wrapper";
import FilterBars from "../Components/FilterBars";
import NewsContainer from "../Components/NewsContainer";

import NewsModal from "../Components/NewsModal";

function News() {
  let [count, countSet] = useState(1);
  let [modalActive, setModalActive] = useState(false);
  let [modalNews, setModalNews] = useState();

  return (
    <Wrapper flex={"flex"} id="news" title="Top News">
      <FilterBars count={count} countSet={countSet} />
      <NewsContainer
        count={count}
        countSet={countSet}
        setModalActive={setModalActive}
        setModalNews={setModalNews}
      />
      <NewsModal
        setModalActive={setModalActive}
        modalActive={modalActive}
        modalNews={modalNews}
      />
    </Wrapper>
  );
}

export default News;
