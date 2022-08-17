import React, { FC } from "react";

import "./song.styles.scss";
/* Framer Motion */
import { motion } from "framer-motion";

type Props = {
  song: any;
  specificSong: any;
  isPlaying: boolean;
  count: number;
  isInView: boolean;
  delay: number;
};

let Song: FC<Props> = ({
  song,
  specificSong,
  isPlaying,
  count,
  isInView,
  delay,
}) => {
  let songAnim = {
    on: { y: 50, opacity: 0 },
    off: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay * 0.2 },
    },
  };
  return (
    <>
      {isInView ? (
        <motion.div
          variants={songAnim}
          initial="on"
          animate="off"
          className="frame"
        >
          <div onClick={() => specificSong(song.id)} className="song">
            <div className="song-number">
              <p>{song.id}</p>
            </div>
            <div
              className={`${
                isPlaying && song.id === count ? null : "pause"
              } song-play-btn`}
            >
              <span></span>
              <span></span>
            </div>
            <div className="song-name">
              <h3>{song.name}</h3>
            </div>
            <div className="song-artist">
              <p>{song.artist}</p>
            </div>
            <div className="song-equalizer active">
              {Array(10)
                .fill(1)
                .map((a, i) => (
                  <div
                    key={i}
                    className={`${
                      isPlaying && song.id === count ? "active" : ""
                    } bar`}
                  ></div>
                ))}
            </div>
            <div className="song-length">
              <p>{song.duration}</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Song;
