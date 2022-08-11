import React, { useState, useRef, useEffect } from "react";

import "./music.styles.scss";

/* Components */
import Wrapper from "../Components/Wrapper";
import Song from "./../Components/Song";
import MusicPlayer from "./../Components/MusicPlayer";

export function calculateDuration(songSeconds) {
  let minutes = Math.floor(songSeconds / 60);
  let returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = Math.floor(songSeconds % 60);
  let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
}

function Music({
  count,
  setCount,
  playerActive,
  setPlayerActive,
  setIsPlaying,
  isPlaying,
  player,
  songs,
  setCurrentTime,
  currentTime,
  duration,
}) {
  let togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      player.current.play();
    } else if (isPlaying) {
      setIsPlaying(false);
      player.current.pause();
    }
  };

  let prevSong = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    if (count === 1) {
      setCount(songs.length - 1);
    } else {
      setCount((count -= 1));
    }
  };
  let nextSong = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    if (count === songs.length - 1) {
      setCount(1);
    } else {
      setCount((count += 1));
    }
  };

  let specificSong = (id) => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (id !== count) {
        setCount(id);
        setPlayerActive(true);
      } else if (id === count) {
        setIsPlaying(true);
        player.current.play();
      }
    } else if (isPlaying) {
      if (id === count) {
        setIsPlaying(false);
        player.current.pause();
      } else if (id !== count) {
        setCount(id);
      }
    }
  };

  let onRewind = (value) => {
    setCurrentTime(value);
    player.current.currentTime = value;
  };

  let onClosePlayer = () => {
    setPlayerActive(false);
  };

  return (
    <Wrapper id="music" title="Songs of the Week">
      <div className="music__list">
        {songs
          .filter((item, i) => i > 0)
          .map((song) => (
            <Song
              key={song.id}
              song={song}
              specificSong={specificSong}
              count={count}
              isPlaying={isPlaying}
            />
          ))}
      </div>
      <MusicPlayer
        currentTime={currentTime}
        duration={duration}
        songs={songs}
        count={count}
        isPlaying={isPlaying}
        onRewind={onRewind}
        togglePlay={togglePlay}
        prevSong={prevSong}
        nextSong={nextSong}
        onClosePlayer={onClosePlayer}
        playerActive={playerActive}
        player={player}
      />
    </Wrapper>
  );
}

export default Music;
