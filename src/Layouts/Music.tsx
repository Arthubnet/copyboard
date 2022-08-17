import React, { useRef, FC } from "react";

import "./music.styles.scss";

/* Components */
import Wrapper from "../Components/Wrapper";
import Song from "../Components/Song";
import MusicPlayer from "../Components/MusicPlayer";

/* Motion */
import { motion, useInView } from "framer-motion";

type Props = {
  count: number;
  setCount: (value: number) => void;
  playerActive: boolean;
  setPlayerActive: (value: boolean) => void;
  setIsPlaying: (value: boolean) => void;
  isPlaying: boolean;
  player: any;
  songs: any;
  setCurrentTime: (value: number) => void;
  currentTime: number;
  duration: number;
};

let Music: FC<Props> = ({
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
}) => {
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true });

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

  let specificSong = (id: number) => {
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

  let onRewind = (value: number) => {
    setCurrentTime(value);
    player.current.currentTime = value;
  };

  let onClosePlayer = () => {
    setPlayerActive(false);
  };

  return (
    <Wrapper id="music" title="Songs of the Week">
      <motion.div ref={ref} className="music__list">
        {songs
          .filter((item: any, i: number) => i > 0)
          .map((song: any, i: number) => (
            <Song
              key={song.id}
              song={song}
              specificSong={specificSong}
              count={count}
              isPlaying={isPlaying}
              isInView={isInView}
              delay={i}
            />
          ))}
      </motion.div>
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
};

export default Music;
