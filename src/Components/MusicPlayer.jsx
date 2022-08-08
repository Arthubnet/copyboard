import React from "react";

import "./music-player.styles.scss";
/* Icons */
import prevBtn from "../assets/img/backward-step-solid.svg";
import nextBtn from "../assets/img/forward-step-solid.svg";
import playBtn from "../assets/img/circle-play-solid.svg";
import pauseBtn from "../assets/img/circle-pause-solid.svg";
import volumeBtn from "../assets/img/volume-high-solid.svg";
import closeBtn from "../assets/img/close-white.svg";

/* slider */
import ReactSlider from "react-slider";

import { calculateDuration } from "../Layouts/Music";

function MusicPlayer({
  isPlaying,
  duration,
  songs,
  count,
  onRewind,
  currentTime,
  onClosePlayer,
  playerActive,
  togglePlay,
  prevSong,
  nextSong,
}) {
  return (
    <div className={`${playerActive ? "active " : ""}player`}>
      <div className="player__container">
        <div className="player__description">
          <img
            className="player-cover"
            src={count ? songs[count].cover : null}
            alt="cover"
          />
          <div className="player__description__title">
            <h5>{count ? songs[count].artist : null}</h5>
            <p>{count ? songs[count].name : null}</p>
          </div>
        </div>
        <div className="player-main">
          <div className="player-main__controls">
            <img
              onClick={prevSong}
              className="prevBtn"
              src={prevBtn}
              alt="previous"
              title="Previous"
            />
            <img
              onClick={togglePlay}
              className="playBtn"
              src={isPlaying ? pauseBtn : playBtn}
              alt="play"
              title={isPlaying ? "Pause" : "Play"}
            />
            <img
              onClick={nextSong}
              className="nextBtn"
              src={nextBtn}
              alt="next"
              title="Next"
            />
          </div>
          <div className="progress-container">
            <span>{calculateDuration(currentTime)}</span>
            <ReactSlider
              min={0}
              max={duration ? parseInt(duration) : null}
              value={parseInt(currentTime)}
              onChange={(value) => onRewind(value)}
              className="customSlider"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
            />
            <span>{calculateDuration(duration)}</span>
          </div>
        </div>
        <div className="player__volume">
          <img className="volumeBtn" src={volumeBtn} alt="volume" />
          <div className="progress-volume">
            <div className="progress-volume__inner"></div>
          </div>
        </div>
        <div onClick={onClosePlayer} className="closeBtn">
          <img src={closeBtn} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
