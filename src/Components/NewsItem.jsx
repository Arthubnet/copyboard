import React from "react";

import "./news-item.styles.scss";

function NewsItem({ item }) {
  return (
    <div className="news__item">
      <div className="image-container">
        <img
          src={item.img}
          className="news-img"
          loading="lazy"
          alt={item.alt}
        />
      </div>
      <div className="news-title">
        <h4>{item.genre}</h4>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}

export default NewsItem;
