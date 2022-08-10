import React from "react";

import "./news-item.styles.scss";

/* Framer Motion */
import { motion } from "framer-motion";

function NewsItem({ item, delay, setModalActive, setModalNews }) {
  let animateItem = {
    hidden: { x: -50 },
    visible: {
      x: 0,
      transition: {
        delay: delay,
        duration: 1.3,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  let onOpenModal = () => {
    setModalActive(true);
    setModalNews(item);
  };

  return (
    <motion.div
      /*      variants={animateItem}
      initial="hidden"
      animate="visible" */
      className="news__item"
    >
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
