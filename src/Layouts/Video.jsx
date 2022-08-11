import React, { useState, useRef } from "react";

import "./video.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import VideoModal from "./../Components/VideoModal";

/* Data */
import { videosData } from "../data";

/* Icon */
import playBtn from "../assets/img/play.png";

/* Framer Motion */
import { motion, useInView } from "framer-motion";

function Video({ player, setMusicPlayerActive }) {
  let [modalActive, setModalActive] = useState(false);
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true });
  let onOpenVideo = () => {
    player.current.pause();
    setModalActive(true);
    setMusicPlayerActive((a) => false);
  };
  return (
    <Wrapper id="video" title="Video">
      <div ref={ref} className="video">
        <>
          {isInView ? (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                easings: [0, 0.71, 0.2, 1.01],
              }}
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
}

export default Video;
