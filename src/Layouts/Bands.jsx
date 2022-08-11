import React, { useState, useRef, useEffect } from "react";

import "./bands.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import BandsCard from "../Components/BandsCard";

import { bandsData as bands } from "../data";

import { motion, AnimatePresence, useInView } from "framer-motion";

function Bands() {
  let [count, setCount] = useState(1);
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true });

  /* Framer motion */
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  let scaleAnim = {
    on: { scale: 1.4 },
    off: {
      scale: 1,
      transition: {
        easing: [0, 0.71, 0.2, 1.01],
        delay: 0.1,
        duration: 0.9,
      },
    },
  };
  let widthAnim = {
    on: { width: `100%` },
    off: {
      width: 0,
      transition: {
        delay: 0.1,
        duration: 1,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  let promoOnView = {
    on: { y: 50, opacity: 0 },
    off: {
      y: isInView && 0,
      opacity: isInView && 1,
      transition: {
        duration: 1,
        easing: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  return (
    <Wrapper id="bands" title="Bands">
      <div className="bands__container">
        <AnimatePresence exitBeforeEnter>
          {count ? (
            <motion.div
              ref={ref}
              variants={promoOnView}
              initial="on"
              animate="off"
              className="bands__container__promo"
            >
              <motion.img
                key={count}
                variants={scaleAnim}
                initial="on"
                animate="off"
                src={bands[count].img}
                alt="promo"
              ></motion.img>
              <motion.div
                key={count + 1}
                variants={widthAnim}
                initial="on"
                animate="off"
                className="animated-block"
              ></motion.div>
              <div className="promo-title">
                <h2>{bands[count].title}</h2>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        {isInView ? (
          <div className="bands__container__cards">
            {bands
              .filter((a, i) => i > 0)
              .map((band, i) => (
                <BandsCard
                  band={band}
                  key={band.id}
                  count={count}
                  setCount={setCount}
                  delay={i}
                />
              ))}
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}

export default Bands;
