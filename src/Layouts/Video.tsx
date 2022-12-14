import React, { useState, useRef, FC } from "react";

import "./video.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import VideoModal from "../Components/VideoModal";

/* Data */
import { videosData } from "../data";

/* Framer Motion */
import { motion, useInView } from "framer-motion";

/* Icon */
const playBtn = require("../assets/img/play.png");

type Props = {
  player: any;
  setMusicPlayerActive: (value: boolean) => void;
};

let Video: FC<Props> = ({ player, setMusicPlayerActive }) => {
  let [modalActive, setModalActive] = useState<boolean>(false);
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true });
  let onOpenVideo = () => {
    player.current.pause();
    setModalActive(true);
    setMusicPlayerActive(false);
  };

  let inViewAnim = {
    on: { y: 50, opacity: 0 },
    off: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, easings: [0, 0.71, 0.2, 1.01] },
    },
  };
  return (
    <Wrapper id="video" title="Video">
      <div ref={ref} className="video">
        <>
          {isInView ? (
            <motion.div
              variants={inViewAnim}
              initial="on"
              animate="off"
              className="video__image-container"
            >
              <img
                onClick={onOpenVideo}
                src={videosData[0].img}
                alt="promo"
              ></img>
              <div className="play-btn">
                <img src={playBtn} alt="play"></img>
              </div>
            </motion.div>
          ) : null}
        </>
      </div>
      <VideoModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        videos={videosData}
      />
    </Wrapper>
  );
};

export default Video;
