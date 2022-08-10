import React, { useState } from "react";

import "./more-news.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import NewsItem from "../Components/NewsItem";
import NewsModal from "../Components/NewsModal";

function MoreNews() {
  let [moreNews, setMoreNews] = useState([
    {},
    {
      id: 1,
      genre: "MODELS",
      title: `The models that turned Instagram into their DIY catwalk `,
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9A/production/_120424467_joy2.jpg",
      alt: "sriya",
    },

    {
      id: 2,
      genre: "MODELS",
      title: `How Pooja Mor is Bringing Her Indian Culture to Modeling`,
      img: "https://media.allure.com/photos/57719e3e8d432b9e20f90df8/16:9/w_1280,c_limit/celebrity-trends-2016-03-model-pooja-moor.jpg",
      alt: "brad",
    },
    {
      id: 3,
      genre: "MODELS",
      title: `Kelsey Merritt is our (role) model on and off the runway`,
      img: "http://images.summitmedia-digital.com/preview/images/2018/11/14/KELSEY-MERRITT-VOGUE-nm.jpg",
      alt: "nayeon",
    },
  ]);
  let [count, countSet] = useState(1);
  let [modalActive, setModalActive] = useState(false);
  let [modalNews, setModalNews] = useState();

  return (
    <Wrapper id="more-news" title="More news">
      <div className="more">
        <div className="more__container">
          {moreNews
            .filter((a, i) => i > 0)
            .map((item, i) => (
              <NewsItem
                key={i}
                item={item}
                setModalActive={setModalActive}
                setModalNews={setModalNews}
              />
            ))}
        </div>
      </div>
      <NewsModal
        setModalActive={setModalActive}
        modalActive={modalActive}
        modalNews={modalNews}
      />
    </Wrapper>
  );
}

export default MoreNews;
