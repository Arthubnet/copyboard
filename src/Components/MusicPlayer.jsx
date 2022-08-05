import React from "react";

import "./music-player.styles.scss";

function MusicPlayer() {
  return (
    <div class="player">
      <div class="player__container">
        <div class="player__description">
          <img class="player-cover" src="/" alt="cover" />
          <div class="player__description__title">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div class="player-main">
          <div class="player-main__controls">
            <img
              class="prevBtn"
              src="./assets/img/backward-step-solid.svg"
              alt="previous"
              title="Previous"
            />
            <img
              class="playBtn"
              src="./assets/img/circle-play-solid.svg"
              alt="play"
              title=""
            />
            <img
              class="nextBtn"
              src="./assets/img/forward-step-solid.svg"
              alt="next"
              title="Next"
            />
          </div>
          <div id="progress-container" class="progress-container">
            <span id="current-time"></span>
            <div id="progress" class="progress">
              <div class="progress-inner"></div>
            </div>
            <span id="song-duration"></span>
          </div>
        </div>
        <div class="player__volume">
          <img
            class="volumeBtn"
            src="./assets/img/volume-high-solid.svg"
            alt="volume"
          />
          <div class="progress-volume">
            <div class="progress-volume__inner"></div>
          </div>
        </div>
        <div class="closeBtn">
          <img src="./assets/img/close-white.svg" alt="close" />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
