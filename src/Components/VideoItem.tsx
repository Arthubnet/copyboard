import React, { useRef, FC } from "react";

import "./video-item.styles.scss";

/* Icons */
const prevArrow = require("../assets/img/prev-svg.svg");
const nextArrow = require("../assets/img/next-svg.svg");
const playArrow = require("../assets/img/pink-play.svg");

type Props = {
  video: any;
  videos: any;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  isPlaying: boolean;
  onPlay: () => void;
};

const VideoItem: FC<Props> = ({
  video,
  videos,
  count,
  onPrev,
  onNext,
  isPlaying,
  onPlay,
}) => {
  let videoPlayer: any = useRef();
  let onChangeVid = () => {
    videoPlayer.current.currentTime = 0;
    videoPlayer.current.pause();
  };

  return (
    <div className="video__carousel__inner__item">
      <div className="videoPlayer">
        <video
          ref={videoPlayer}
          src={video.path}
          controlsList="nodownload"
          controls
        ></video>
        {count ? (
          <div
            onClick={() => {
              onPrev();
              onChangeVid();
            }}
            className="videoArrow videoPlayer-leftArrow"
          >
            <img src={prevArrow} alt="previous" />
          </div>
        ) : null}
        {count === videos.length - 1 ? null : (
          <div
            onClick={() => {
              onNext();
              onChangeVid();
            }}
            className="videoArrow videoPlayer-rightArrow"
          >
            <img src={nextArrow} alt="next" />
          </div>
        )}
        {isPlaying && video.id === count + 1 ? null : (
          <div
            onClick={() => {
              onPlay();
              videoPlayer.current.play();
            }}
            className="videoPlayer__background"
          >
            <img src={video.img} alt={video.alt} />
            <div className="videoPlayer__playBtn">
              <img src={playArrow} alt="play" />
            </div>
          </div>
        )}
      </div>
      <div className="video-title">
        <h4>{video.genre}</h4>
        <h3>{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoItem;
