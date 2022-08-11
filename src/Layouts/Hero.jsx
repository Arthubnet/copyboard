import React, { useState } from "react";

import "./hero.styles.scss";
import HeroSlide from "../Components/HeroSlide";
import { heroData } from "../data";

/* width hook */
import useWindowDimensions from "../Hooks/useWindowDimensions";
/* Framer Motion */
import { motion } from "framer-motion";

function Hero() {
  const { width } = useWindowDimensions();
  let [currentImage, setCurrentImage] = useState(0);

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
