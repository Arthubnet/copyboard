import React, { FC } from "react";
import "./band-cards.styles.scss";

import { motion, Variants } from "framer-motion";

type Props = {
  band: {
    id: any;
    title: string;
    author: string;
    time: number;
  };
  count: number;
  setCount: (id: number) => number;
  delay: number;
};

const BandsCard: FC<Props> = ({ band, count, setCount, delay }) => {
  let cardAnim: Variants = {
    on: { x: 30, opacity: 0 },
    off: {
      x: 0,
      opacity: 1,
      transition: { delay: (delay + 1) * 0.15, duration: 1.2 },
    },
  };
  return (
    <motion.div
      variants={cardAnim}
      initial="on"
      animate="off"
      onClick={() => setCount(band.id)}
      id={band.id}
      className={`${
        band.id === count ? "active " : ""
      }bands__container__cards__card`}
    >
      <h3>{band.title}</h3>
      <div className="author">
        <p>{band.author}</p>
        <p>{band.time}</p>
      </div>
    </motion.div>
  );
};

export default BandsCard;
