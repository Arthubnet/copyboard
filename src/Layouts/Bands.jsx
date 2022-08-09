import React, { useState } from "react";

import "./bands.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import BandsCard from "../Components/BandsCard";

import { motion, AnimatePresence } from "framer-motion";

function Bands() {
  let [bands, setBands] = useState([
    {},
    {
      id: 1,
      title: `The Hu return with This Is Mongol single and spectacular video`,
      author: "Andrey Coy",
      time: "5 hours ago",
      img: "https://images.squarespace-cdn.com/content/v1/5c806bf634c4e2faa1db4e56/1552024656747-1GJ9GGXAUV7XKORR2I08/DSC01973+copy.jpg",
    },
    {
      id: 2,
      title: `Zakk Wylde reflects on 12 musical milestones from a career`,
      author: "Henry Gray",
      time: "10 hours ago",
      img: "https://townsquare.media/site/366/files/2016/05/Ozzfest-Knotfest-ZakkSabbath-20160512-KathyFlynn-4393.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
    },
    {
      id: 3,
      title: `Gwen Stefani accused of cultural appropriation in 'Light My Fire'`,
      author: "Hannah Dailey",
      time: "3 hours ago",
      img: "https://media.vanityfair.com/photos/6227ba2d4471a41eee9742fd/master/pass/gwen-stefani-gxve-2022-tout.jpg",
    },
  ]);
  let [count, setCount] = useState(1);
  /* Framer motion */

  let imgAnimation = {
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
    <Wrapper id="bands" title="Bands">
      <div className="bands__container">
        <AnimatePresence exitBeforeEnter>
          {count ? (
            <motion.div
              className="bands__container__promo"
              key={count}
              variants={imgAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ backgroundImage: `url(${bands[count].img})` }}
            >
              <div className="promo-title">
                <h2>{bands[count].title}</h2>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div className="bands__container__cards">
          {bands
            .filter((a, i) => i > 0)
            .map((band) => (
              <BandsCard
                band={band}
                key={band.id}
                count={count}
                setCount={setCount}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Bands;
