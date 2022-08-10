import React, { useState } from "react";
import "./test-news.styles.scss";

import Wrapper from "../Components/Wrapper";
import { news } from "../data";
/* Framer Motion */
import { motion } from "framer-motion";
import NewsModal from "../Components/NewsModal";

function TestNews() {
  const [hovered, setCovered] = useState(false);
  const [current, setCurrent] = useState();
  let [modalActive, setModalActive] = useState(false);
  let [modalNews, setModalNews] = useState();

  let onHover = (id) => {
    setCovered(true);
    setCurrent(id);
  };

  let onModalOpen = (id) => {
    setModalNews(id);
    setModalActive(true);
  };

  return (
    <Wrapper id="news" title="News">
      <div className="news-container">
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
              animate={{ scale: hovered && aNew.id === current ? 0.9 : 1 }}
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
                alt="olivia"
              ></motion.img>
            </motion.div>
            <div className="title">
              <h4>{aNew.category}</h4>
              <h3>{aNew.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <NewsModal
        setModalActive={setModalActive}
        modalActive={modalActive}
        modalNews={modalNews}
      />
    </Wrapper>
  );
}

export default TestNews;
