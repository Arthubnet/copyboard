import React, { useState } from "react";

import "./video.styles.scss";
/* Components */
import Wrapper from "../Components/Wrapper";
import VideoModal from "./../Components/VideoModal";

/* width hook */
import useWindowDimensions from "../Hooks/useWindowDimensions";

/* Videos */
import img from "../assets/img/ridni.jpg";
import okean from "../assets/video/okean.mp4";
import ridni from "../assets/video/ridni.mp4";
import sade from "../assets/video/sade.mp4";

/* Icon */
import { CgPlayButton } from "react-icons/cg";

/* Framer Motion */
import { motion } from "framer-motion";

function Video({ player, setMusicPlayerActive }) {
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
  let [modalActive, setModalActive] = useState(false);

  let onOpenVideo = () => {
    player.current.pause();
    setModalActive(true);
    setMusicPlayerActive((a) => false);
  };
  return (
    <Wrapper id="video" title="Video">
      <div className="video">
        <>
          <motion.div className="video__image-container">
            <motion.img
              onClick={onOpenVideo}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{
                easing: [0, 0.71, 0.2, 1.01],
                delay: 1,
                duration: 0.7,
              }}
              src={videos[0].img}
              alt="promo"
            ></motion.img>
            <motion.div
              initial={{ width: `100%` }}
              animate={{ width: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                easings: [0, 0.71, 0.2, 1.01],
              }}
              className="animated-block"
            ></motion.div>
            <div className="play-btn">
              <CgPlayButton size={25} style={{ fill: "black" }} />
            </div>
          </motion.div>
        </>
      </div>
      <VideoModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        videos={videos}
      />
    </Wrapper>
  );
}

export default Video;
