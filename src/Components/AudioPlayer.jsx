import React, { useState, useRef, useEffect } from "react";
/* styles */
import styles from "../styles/AudioPlayer.module.scss";
/* icons */
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
/* data */
import { songsData } from "./../data/data";
/* Render hook */
import { useUpdateEffect } from "react-use";

function calculateDuration(songSeconds) {
  let minutes = Math.floor(songSeconds / 60);
  let returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = Math.floor(songSeconds % 60);
  let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
}

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  let { name, path } = songsData[trackIndex];
  let [durationState, setDurationState] = useState(
    songsData[trackIndex].duration
  );

  let audioPlayer = useRef();
  let progressBar = useRef();
  console.dir(progressBar.current);

  useEffect(() => {
    setTrackIndex(0);
    setCurrentTime(audioPlayer.current.currentTime);
  }, []);

  useUpdateEffect(() => {
    audioPlayer.current.play();
    progressBar.current.max = Math.floor(audioPlayer.current.duration);
  }, [trackIndex]);

  let toggleActive = () => {
    if (!isPlaying) {
      setIsPlaying((v) => !v);
      audioPlayer.current.play();
    } else if (isPlaying) {
      setIsPlaying((v) => !v);
      audioPlayer.current.pause();
    }
  };

  let nextTrack = () => {
    if (trackIndex === songsData.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex((trackIndex += 1));
    }
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  let prevTrack = () => {
    if (trackIndex === 0) {
      setTrackIndex(songsData.length - 1);
    } else {
      setTrackIndex((trackIndex -= 1));
    }
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  let onMeta = (event) => {
    let duration = event.currentTarget.duration;
    progressBar.current.max = Math.floor(audioPlayer.current.duration);
    return setDurationState(duration);
  };

  let changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / durationState) * 100}%`
    ),
      console.log(progressBar.current.value);
    console.log(durationState);
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div className={styles.audioPlayer}>
      <audio
        ref={audioPlayer}
        src={path}
        onLoadedMetadata={onMeta}
        onTimeUpdate={() => {
          setCurrentTime(audioPlayer.current.currentTime);
          progressBar.current.value = audioPlayer.current.currentTime;
        }}
      />
      <button onClick={() => prevTrack()} className={styles.forwardBackward}>
        <HiOutlineArrowSmLeft />
      </button>
      <button className={styles.playPause} onClick={toggleActive}>
        {isPlaying ? (
          <BsFillPauseFill />
        ) : (
          <BsFillPlayFill className={styles.play} />
        )}
      </button>
      {/* next */}
      <button onClick={() => nextTrack()} className={styles.forwardBackward}>
        <HiOutlineArrowSmRight />
      </button>
      {/* current time */}
      <div className={styles.currentTime}>{calculateDuration(currentTime)}</div>
      {/* progressbar */}
      <div>
        <input
          ref={progressBar}
          type="range"
          defaultValue="0"
          onChange={changeRange}
        />
      </div>
      {/* duration */}
      <div className={styles.duration}>{calculateDuration(durationState)}</div>
      {/* Song Name */}
      <h1>{name}</h1>
    </div>
  );
};

export default AudioPlayer;
