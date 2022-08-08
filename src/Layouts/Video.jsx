import React, { useState, useRef, useEffect } from "react";

import "./video.styles.scss";
import Wrapper from "../Components/Wrapper";
import VideoItem from "../Components/VideoItem";
/* width hook */
import useWindowDimensions from "../Hooks/useWindowDimensions";

/* Videos */
import img from "../assets/img/ridni.jpg";
import okean from "../assets/video/okean.mp4";
import ridni from "../assets/video/ridni.mp4";
import sade from "../assets/video/sade.mp4";

/* Framer Motion */
import { motion } from "framer-motion";

function Video({ count, setCount }) {
  let { width } = useWindowDimensions();
  let [videos, setVideos] = useState([
    {
      id: 1,
      genre: "Video Top",
      title: `Okean Elzy & Odyn v kanoe - Misto vesny || Official video`,
      img: "https://zn.ua/img/forall/u/14/3/%D0%9C%D1%96%D1%81%D1%82%D0%BE%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B8.jpg",
      path: okean,
      alt: "okean",
    },
    {
      id: 2,
      genre: "Video Top",
      title: `Alyona alyona - Рідні мої (feat. Jerry Heil)`,
      img: img,
      path: ridni,
      alt: "ridni",
    },
    {
      id: 3,
      genre: "Video Top",
      title: `Song of the Day: Jezebel by Sade, Live`,
      img: "https://distracttv.com/wp-content/uploads/2017/09/SADE-Singer-featured-image.jpg",
      path: sade,
      alt: "sade",
    },
  ]);
  let [carouselWidth, setCarouselWidth] = useState();
  let [isPlaying, setIsPlaying] = useState(false);
  let carousel = useRef();

  useEffect(() => {
    setCarouselWidth(carousel.current.clientWidth);
  }, []);

  let onPlay = () => {
    setIsPlaying(true);
  };
  let onNext = () => {
    setCount((count += 1));
    setIsPlaying(false);
  };
  let onPrev = () => {
    setCount((count -= 1));
    setIsPlaying(false);
  };

  return (
    <Wrapper id="video" title="Video">
      <div ref={carousel} className="video__carousel">
        <motion.div
          initial={{ translateX: 0 }}
          animate={{ translateX: width ? -width * count : 0 }}
          transition={{ type: "tween", duration: 1 }}
          className="video__carousel__inner"
        >
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              count={count}
              videos={videos}
              video={video}
              onPrev={onPrev}
              onNext={onNext}
              isPlaying={isPlaying}
              onPlay={onPlay}
            />
          ))}
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default Video;
