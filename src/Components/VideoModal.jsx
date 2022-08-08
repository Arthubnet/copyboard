import React, { useState, useRef } from "react";

import "./video-modal.styles.scss";

import { motion, AnimatePresence } from "framer-motion";

const VideoModal = ({ modalAcive, modalAciveSet, videos }) => {
  let videoPlayer = useRef(null);

  let onComplete = () => {
    if (modalAcive) {
      videoPlayer.current.play();
    }
  };

  /* Framer motion variables */
  let moduleAnimation = {
    hidden: { width: 0 },
    visible: {
      width: `100vw`,
      transition: { delay: 0.1, duration: 1, easings: [0, 0.71, 0.2, 1.01] },
    },
    exit: {
      width: 0,
      transition: {
        delay: 1,
        duration: 1,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  let videoAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 1.2, easings: [0, 0.71, 0.2, 1.01] },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  return (
    <AnimatePresence>
      {modalAcive && (
        <motion.div
          className="modal"
          key={1}
          variants={moduleAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            onClick={() => modalAciveSet(false)}
            className="modal-close"
          ></div>
          <motion.div
            className="modal__inner"
            key={2}
            variants={videoAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={onComplete}
          >
            <video
              ref={videoPlayer}
              src={videos[0].path}
              type="video/mp4"
              controls
              controlsList="nodownload noplaybackspeed"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
