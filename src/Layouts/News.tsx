import React, { useState, useRef } from "react";
import "./news.styles.scss";

import Wrapper from "../Components/Wrapper";
import { news } from "../data";
/* Framer Motion */
import { motion, useInView } from "framer-motion";
import NewsModal from "../Components/NewsModal";

type ANew = {
  id: number;
  img: any;
  title: string;
  category: string;
  alt: string;
};

function TestNews() {
  const [hovered, setCovered] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>();
  let [modalActive, setModalActive] = useState<boolean>(false);
  let [modalNews, setModalNews] = useState<ANew>();

  let ref = useRef(null);
  let isInView = useInView(ref, { once: true });
  let onHover = (id: number) => {
    setCovered(true);
    setCurrent(id);
  };

  let onModalOpen = (id: ANew) => {
    setModalNews(id);
    setModalActive(true);
  };

  return (
    <Wrapper id="news" title="News">
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isInView ? 0 : "null", opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="news-container"
      >
        {news.map((aNew, i) => (
          <div
            key={i}
            className={`${i % 2 === 1 ? "margin" : ""} new-container`}
          >
            <motion.div
              className="image"
              key={aNew.id}
              onHoverStart={() => onHover(aNew.id)}
              onHoverEnd={() => setCovered(false)}
              initial={{ scale: 1 }}
              animate={{
                scale: hovered && aNew.id === current ? 0.9 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.img
                onClick={() => onModalOpen(aNew)}
                key={aNew.id}
                initial={{ scale: 1 }}
                animate={{ scale: hovered && aNew.id === current ? 1.2 : 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                src={aNew.img}
                alt={aNew.alt}
              ></motion.img>
            </motion.div>
            <div className="title">
              <h4>{aNew.category}</h4>
              <h3>{aNew.title}</h3>
            </div>
          </div>
        ))}
      </motion.div>
      <NewsModal
        setModalActive={setModalActive}
        modalActive={modalActive}
        modalNews={modalNews}
      />
    </Wrapper>
  );
}

export default TestNews;
