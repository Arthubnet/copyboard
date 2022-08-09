import React, { useState } from "react";

import "./more-news.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import NewsItem from "../Components/NewsItem";

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

  return (
    <Wrapper id="more-news" title="Models">
      <div class="more">
        <div class="more__container">
          {moreNews
            .filter((a, i) => i > 0)
            .map((item, i) => (
              <NewsItem key={i} item={item} />
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default MoreNews;
