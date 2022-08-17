import React, { useState, useRef } from "react";

import "./more-news.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import NewsItem from "../Components/NewsItem";
import NewsModal from "../Components/NewsModal";

import { moreNewsData } from "../data";

import { motion, useInView } from "framer-motion";

type ANew = {
  id: number;
  img: any;
  title: string;
  category: string;
  alt: string;
};

function MoreNews() {
  let [modalActive, setModalActive] = useState<boolean>(false);
  let [modalNews, setModalNews] = useState<ANew>();
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true });

  return (
    <Wrapper id="more-news" title="More news">
      <div className="more">
        <div ref={ref} className="more__container">
          {isInView &&
            moreNewsData
              .filter((a, i) => i > 0)
              .map((item: any, i) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: (i + 1) * 0.15,
                    easings: [0, 0.71, 0.2, 1.01],
                  }}
                  key={i}
                >
                  <NewsItem
                    key={i}
                    item={item}
                    setModalActive={setModalActive}
                    setModalNews={setModalNews}
                  />
                </motion.div>
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
