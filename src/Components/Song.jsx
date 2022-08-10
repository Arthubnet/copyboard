import React, { useEffect } from "react";

import "./song.styles.scss";

function Song({ song, specificSong, isPlaying, count }) {
  return (
    <div className="frame">
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
    </div>
  );
}

export default Song;
