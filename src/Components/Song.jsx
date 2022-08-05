import React from "react";

import "./song.styles.scss";

function Song({ song, audioEl }) {
  console.log(audioEl);
  return (
    <div className="frame">
      <div class="song">
        <div class="song-number">
          <p>{song.id}</p>
        </div>
        <div onClick={() => audioEl.play()} class="song-play-btn pause">
          <span></span>
          <span></span>
        </div>
        <div class="song-name">
          <h3>{song.name}</h3>
        </div>
        <div class="song-artist">
          <p>{song.artist}</p>
        </div>
        <div class="song-equalizer active">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="song-length">
          <p>{song.duration}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
