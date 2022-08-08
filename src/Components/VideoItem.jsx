import React, { useRef } from "react";

import "./video-item.styles.scss";

/* Icons */
import prevArrow from "../assets/img/prev-svg.svg";
import nextArrow from "../assets/img/next-svg.svg";
import playArrow from "../assets/img/pink-play.svg";

const VideoItem = ({
  video,
  videos,
  count,
  onPrev,
  onNext,
  isPlaying,
  onPlay,
}) => {
  let videoPlayer = useRef();
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
          type="video/mp4"
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
