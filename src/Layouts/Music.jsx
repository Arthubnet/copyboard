import React, { useState, useRef } from "react";

import "./music.styles.scss";
import { songsData } from "../data";
/* Components */
import Wrapper from "../Components/Wrapper";
import Song from "./../Components/Song";

function Music() {
  let audioEl = useRef(null);
  console.log(audioEl.current);
  return (
    <Wrapper id="music" title="Music">
      <audio
        ref={audioEl}
        src={songsData[1].path}
        class="audio"
        preload="metadata"
      ></audio>
      <div class="music__list">
        {songsData.map((song) => (
          <Song audioEl={audioEl.current} song={song} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Music;
