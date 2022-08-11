import React, { useState, useRef, useEffect } from "react";

import "./video-modal.styles.scss";

import useWindowDimensions from "../Hooks/useWindowDimensions";
import { ReactComponent as CloseBtn } from "../assets/img/close.svg";
/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

const VideoModal = ({ modalActive, setModalActive, videos }) => {
  let { width } = useWindowDimensions();
  let videoPlayer = useRef(null);

  let onComplete = () => {
    if (modalActive) {
      videoPlayer.current.play();
    }
  };

  let onClose = () => {
    setModalActive(false);
  };

  useEffect(() => {
    if (modalActive) {
      if (width > 800) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "12px";
      }
    }
  }, [modalActive]);

  let onExit = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";
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
    <>
      <AnimatePresence onExitComplete={onExit}>
        {modalActive && (
          <motion.div
            className="modal"
            key={1}
            variants={moduleAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={onComplete}
          >
            <div onClick={onClose} className="modal-close"></div>
            <motion.div
              className="modal__inner"
              key={2}
              variants={videoAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <video
                ref={videoPlayer}
                src={videos[0].path}
                type="video/mp4"
                controls
                controlsList="nodownload noplaybackspeed"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="modal-close-btn "
            >
              <CloseBtn />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoModal;
