import React from "react";

import "./news-item.styles.scss";

/* Framer Motion */
import { motion } from "framer-motion";

function NewsItem({ item, setModalActive, setModalNews }) {
  let onOpenModal = () => {
    setModalActive(true);
    setModalNews(item);
  };

  return (
    <motion.div className="news__item">
      <div onClick={onOpenModal} className="image-container">
        <img
          className="news-img"
          src={item.img}
          loading="lazy"
          alt={item.alt}
        />
      </div>
      <div className="news-title">
        <h4>{item.genre}</h4>
        <h3>{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default NewsItem;
