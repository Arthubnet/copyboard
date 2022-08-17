import React, { FC } from "react";
import "./news-container.styles.scss";

import { news } from "../data";

import NewsColumn from "./NewsColumn";

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

type ANew = {
  id: number;
  img: any;
  title: string;
  category: string;
  alt: string;
};

type Props = {
  count: number;
  setModalActive: (value: boolean) => void;
  setModalNews: (value: ANew) => void;
};

let NewsContainer: FC<Props> = ({ count, setModalActive, setModalNews }) => {
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
      {news
        .filter((a, i) => i === count)
        .map((container: any) => (
          <motion.div
            key={count}
            variants={animateContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="news__container"
          >
            {container.data.map((item: ANew, index: number) => (
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
};

export default NewsContainer;
