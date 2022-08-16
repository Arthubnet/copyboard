import React, { useState, useRef } from "react";

import Music from "./Music";
import Video from "./Video";
import { songsData as songs } from "../data";

function calculateDuration(songSeconds: number): number {
  let minutes = Math.floor(songSeconds / 60);
  let returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = Math.floor(songSeconds % 60);
  let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return parseInt(`${returnedMinutes}:${returnedSeconds}`);
}

const Media = () => {
  let [musicCount, setMusicCount] = useState<any>(null);
  let [musicPlayerActive, setMusicPlayerActive] = useState<boolean>(false);
  let [isPlaying, setIsPlaying] = useState<boolean>(false);
  let [currentTime, setCurrentTime] = useState<number>(() =>
    calculateDuration(0)
  );
  let [duration, setDuration] = useState<number>(() => calculateDuration(0));

  let player: any = useRef();

  let onCanPlay = () => {
    if (isPlaying) {
      player.current?.play();
    }
  };
  let onTimeUpdate = () => {
    setCurrentTime(player.current?.currentTime);
  };
  let onLoadMeta = () => {
    setDuration(parseInt(player.current?.duration + 3));
  };
  let onDurationChange = () => {
    player.current?.pause();
  };
  let nextSong = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    if (musicCount === songs.length - 1) {
      setMusicCount(1);
    } else {
      setMusicCount((musicCount += 1));
    }
  };
  return (
    <div>
      <audio
        ref={player}
        src={musicCount ? songs[musicCount].link : null}
        onCanPlay={onCanPlay}
        onEnded={nextSong}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadMeta}
        onEmptied={onDurationChange}
        onPause={() => setIsPlaying(false)}
      ></audio>
      <Music
        count={musicCount}
        setCount={setMusicCount}
        playerActive={musicPlayerActive}
        setPlayerActive={setMusicPlayerActive}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        songs={songs}
        player={player}
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
        duration={duration}
      />
      <Video player={player} setMusicPlayerActive={setMusicPlayerActive} />
    </div>
  );
};

export default Media;
