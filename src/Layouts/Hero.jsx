import React, { useState } from "react";

import "./hero.styles.scss";
import HeroSlide from "../Components/HeroSlide";
import useWindowDimensions from "../Hooks/useWindowDimensions";
/* Framer Motion */
import { motion } from "framer-motion";

function Hero() {
  const { width } = useWindowDimensions();
  let [currentImage, setCurrentImage] = useState(0);
  let heroData = [
    {
      imgUrl:
        "https://assets.teenvogue.com/photos/6228d78324ee50e5eeee2500/16:9/w_2560%2Cc_limit/1377055201",
      date: "07/23/2022",
      author: "By Brandon Ridish",
      title: `Woman of the year <span>Olivia Rodrigo</span> is writing new music`,
      footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
    },
    {
      imgUrl:
        "https://www.telekom.com/resource/image/494146/landscape_ratio4x3/1296/972/fbd84e9fc30a077d92048d7f26f88d7a/Km/bi-170510-gorillaz-en.jpg",
      date: "07/23/2022",
      author: "By Brandon Ridish",
      title: `<span>Gorillaz</span> release surprise new EP 'Meanwhile',
              celebrating Notting Hill Carnival`,
      footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
    },
    {
      imgUrl:
        "https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg",
      date: "07/23/2022",
      author: "By Brandon Ridish",
      title: `<span>Will Smith</span> comes clean: 'I'm in the worst shape of my
              life`,
      footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
    },
  ];

  return (
    <section id="hero" className="hero">
      <motion.div
        animate={{ x: -width * currentImage }}
        transition={{ duration: 0.5 }}
        className="hero__slider"
      >
        {heroData.map((slide, index) => (
          <HeroSlide
            slide={slide}
            key={index}
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            heroData={heroData}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
