import React from "react";

import "./news-item.styles.scss";

import { motion } from "framer-motion";

function NewsItem({ item }) {
  let animateItem = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: { duration: 1.3, easings: [0, 0.71, 0.2, 1.01] },
    },
  };

  return (
    <motion.div
      /*  variants={animateItem}
      initial="hidden"
      animate="visible" */
      className="news__item"
    >
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
    </motion.div>
  );
}

export default NewsItem;
