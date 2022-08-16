import React, { useState, useEffect, FC } from "react";

import "./music-player.styles.scss";

/* slider */
import ReactSlider from "react-slider";

import { IoPlaySharp } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { BsArrowDown } from "react-icons/bs";
import { IoVolumeHighSharp } from "react-icons/io5";
import { IoVolumeOffSharp } from "react-icons/io5";
import { calculateDuration } from "../Layouts/Music";

type Props = {
  isPlaying: boolean;
  duration: any;
  songs: any;
  count: any;
  onRewind: (value: any) => void;
  currentTime: any;
  onClosePlayer: () => void;
  playerActive: boolean;
  togglePlay: () => void;
  prevSong: () => void;
  nextSong: () => void;
  player: any;
};

let MusicPlayer: FC<Props> = ({
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
  player,
}) => {
  let [volume, setVolume] = useState<number>(1);
  let [savedVolume, setSavedVolume] = useState<any>();

  useEffect(() => {
    player.current.volume = volume;
  }, [volume]);

  let onVolumeChange = (value: number) => {
    setVolume(value);
  };

  let toggleMute = () => {
    if (player.current.volume > 0) {
      setSavedVolume(volume);
      setVolume(0);
    } else if (player.current.volume === 0) {
      setVolume(savedVolume);
    }
  };

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
            <div title="Previous" className="prevBtn btn" onClick={prevSong}>
              <IoPlaySkipBackSharp size={20} />
            </div>

            <div
              title={isPlaying ? "Pause" : "Play"}
              className="playBtn btn"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <IoPauseOutline size={24} />
              ) : (
                <IoPlaySharp size={24} />
              )}
            </div>

            <div title="Next" className="nextBtn btn" onClick={nextSong}>
              <IoPlaySkipForwardSharp size={20} />
            </div>
          </div>
          <div className="progress-container">
            <span>{calculateDuration(currentTime)}</span>
            <ReactSlider
              min={0}
              max={duration && parseInt(duration)}
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
          <div onClick={toggleMute} className="volume-btn btn">
            {volume !== 0 ? (
              <IoVolumeHighSharp size={20} />
            ) : (
              <IoVolumeOffSharp size={20} />
            )}
          </div>
          <div className="progress-volume">
            <ReactSlider
              min={0}
              max={100}
              value={volume * 100}
              onChange={(value) => onVolumeChange(value / 100)}
              className="volumeSlider"
              trackClassName="volumeSlider-track"
              thumbClassName="volumeSlider-thumb"
            />
          </div>
        </div>
        <div onClick={onClosePlayer} className="closeBtn">
          <BsArrowDown />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
