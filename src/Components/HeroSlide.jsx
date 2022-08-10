import React, { useState, useEffect } from "react";

import "./hero-slide.styles.scss";
/* Parse */
import parse from "html-react-parser";

function HeroSlide({ slide, setCurrentImage, currentImage, heroData }) {
  let [disabled, setDisable] = useState({ left: false, right: false });

  /*   let disableCarouselBtns = () => {
    if (currentImage === 0) {
      setDisable({ right: false, left: true });
      return;
    }
    if (currentImage === heroData.length - 1) {
      setDisable({ right: true, left: false });
      return;
    } else {
      setDisable({ right: false, left: false });
    }
  }; */
  useEffect(() => {
    console.log(currentImage);
  }, [currentImage]);

  return (
    <div className="hero__slider__slide">
      <img className="hero-background" src={slide.imgUrl} alt="hero" />
      <div className="hero-title">
        <div className="journalist">
          <p>{slide.date}</p>
          <p>{slide.author}</p>
        </div>
        {parse(`<h1>${slide.title}</h1>`)}
        <p>{slide.footer}</p>
      </div>
      <div className="arrows heroBtn">
        {currentImage !== 0 && currentImage === slide.id - 1 ? (
          <button
            onClick={() => setCurrentImage((currentImage -= 1))}
            className="hero-left-arrow arrow"
          >
            &#8592;
          </button>
        ) : null}
        {currentImage !== heroData.length - 1 &&
        currentImage === slide.id - 1 ? (
          <button
            onClick={() => setCurrentImage((currentImage += 1))}
            className="hero-right-arrow arrow"
          >
            &#8594;
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default HeroSlide;
