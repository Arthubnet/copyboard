import React, { useEffect } from "react";
import "./news-container.styles.scss";

import { newsData } from "../data";

import NewsColumn from "./NewsColumn";

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

function NewsContainer({ count, setModalActive, setModalNews }) {
  let animateContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {newsData
        .filter((a, i) => i === count)
        .map((container) => (
          <motion.div
            key={count}
            variants={animateContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="news__container"
          >
            {container.data.map((item, index) => (
              <NewsColumn
                key={index}
                item={item}
                setModalActive={setModalActive}
                setModalNews={setModalNews}
              />
            ))}
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export default NewsContainer;
