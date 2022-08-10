import React, { useState } from "react";

import "./hero.styles.scss";
import HeroSlide from "../Components/HeroSlide";

/* width hook */
import useWindowDimensions from "../Hooks/useWindowDimensions";
/* Framer Motion */
import { motion } from "framer-motion";

function Hero() {
  const { width } = useWindowDimensions();
  let [currentImage, setCurrentImage] = useState(0);
  let heroData = [
    {
      id: 1,
      imgUrl:
        "https://mloz5fexx1sj.i.optimole.com/gmV1hb0-nqBoy2En/w:auto/h:auto/q:100/https://gal-dem.com/wp-content/uploads/2022/01/Untitled-design-25.png",
      date: "07/23/2022",
      author: "By Brandon Ridish",
      title: `The dilemma of <span>British Vogue's</span> cover and Black representation`,
      footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
    },

    {
      id: 2,
      imgUrl:
        "https://images.ctfassets.net/hbmwn5pbkdff/60hCMrPi5eOkFoewrfMBc7/1476e756867c366848d441a4646af070/CROPPED_BRAND_VOGUE_MEXICO2.jpg",
      date: "07/23/2022",
      author: "By Brandon Ridish",
      title: `Guess Who's On the Cover of the <span>Vogue Paris</span> 'Top Models' Special Issue?`,
      footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
    },

    {
      id: 3,
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
        transition={{ duration: 1, easings: [0, 0.71, 0.2, 1.01] }}
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
