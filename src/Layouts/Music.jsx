import React, { useState, useRef, useEffect } from "react";

import "./music.styles.scss";

import song from "../assets/songs/brat.mp3";

/* Components */
import Wrapper from "../Components/Wrapper";
import Song from "./../Components/Song";
import MusicPlayer from "./../Components/MusicPlayer";
/* Render hook */
import { useUpdateEffect } from "react-use";

export function calculateDuration(songSeconds) {
  let minutes = Math.floor(songSeconds / 60);
  let returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = Math.floor(songSeconds % 60);
  let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
}

function Music() {
  let [songs, setSong] = useState([
    {},
    {
      id: 1,
      name: "Здорово",
      link: `https://download1325.mediafire.com/nygcq2myt4ag/3vg72wolo25p0hk/zdorovo.mp3`,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX18sXfdWhtNOmakF5iJ6VzfxvEsrqZQgJvY1XXbDlnGuxWJjmCOigCZGGu5UINvnvjPUO8GprfSFEXFnFD5Sf9DJwJ%2fCxCvREgFKvFLbx%2fTlswqx%2bzJRRTkDJneJI8OyrJIf7Wn%2bnHjRfOwepSvu%2brAd0tdOwxtmPXwKfvcEiOyQmG4ZEDOgy8ox&s=youtube&id=&h=844019832527452011",
      artist: "Носков",
      duration: "4:17",
      cover: "https://i.scdn.co/image/ab67616d0000b273ac018113ff1b23da43f88e10",
    },
    {
      id: 2,
      name: "Брат",
      link: `https://download1351.mediafire.com/ag891yxxpd0g/d15kvkqvsvogvwz/brat.mp3`,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19NqLeNPgTA7VqZ9Zb6B4Jj7Ose6gMmxT39QGLslmc7uN0Ri%2bGTkAXfeJfJK%2fQaBb9OS5cVmNWnoVSSlDVtOnNe8826QMrd0Ht9ONkNSwHtDqIqUgnBtffQ&s=youtube&id=&h=844019832527452031",
      artist: "LeanJe",
      duration: "3:41",
      cover:
        "https://images.genius.com/39a9ee0ff3383b420394105dea72858b.1000x1000x1.jpg",
    },

    {
      id: 3,
      name: "Evolve II",
      link: `https://download849.mediafire.com/68u85pirelrg/e7n7m113re7slhg/nordwise.mp3`,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2bufA1IpiyHwJ7sBNzf%2fDQ70cq5GsIBDeH4TXbiwCqwQpr9SRkUa9cFqf1KR5rWifOWezv5lqueEyuNeyMb%2brzYNI0hc%2b9zRDxLFl3ceHJSJKLzlZ7RssI6gAXjlSo2fS7yDohOC%2fqQZmSr7fdKIsn8pxBHRFtX0sRPGXhLlyfwe36IT5ktiulG&s=youtube&id=&h=844019832527452015",
      artist: "Nordwise",
      duration: "3:50",
      cover: "https://f4.bcbits.com/img/a3784090808_16.jpg",
    },

    {
      id: 4,
      name: "Sun Is Shining",
      link: `https://download1319.mediafire.com/z28srjperwag/xnkfqou4xuijqjy/marley.mp3`,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2be59DOjqaIapFZEjSeohGerdaYt38SaH1DjVnkSH2c0rflU6Yc%2bckFCOE%2fG3J8YVtjxALu20DetPijzxTD3ztECBOeVkeibcRiP67mSkZY0q99qjEAJmfqdSmcAbEHe1kgFEEayBmKcyFnJKoGIHbLZAGmIibVUXo%3d&s=youtube&id=&h=844019832527451710",
      artist: "Bob Marley",
      duration: "7:32",
      cover:
        "https://2.bp.blogspot.com/-gf_cbHxPwXk/UuNWput61VI/AAAAAAAABoo/ns2Sb0ufl1w/s1600/bob-marley.jpg",
    },
    {
      id: 5,
      name: "Красота",
      link: `https://download1492.mediafire.com/a2ov2375zhog/1ymxyz4gw2a16kb/krasivo.mp3`,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19vqdf%2fCyVOD1nhGP7uMyPuBHOYOrPhOHt3aRw7WXaXvLHMXruiazfkdf2OIY4gINKK3Uji%2f7gOmPcdmG1s529ME3Yz%2f6THy3G4PfY5rK%2f8y7P%2b303UXHC9&s=youtube&id=&h=844019832527451705",
      artist: "Чайковська",
      duration: "4:17",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/avatar170s/cf42b9f1ee9a203818a64357ba5b2b1c",
    },
  ]);
  let [count, setCount] = useState(null);
  let [isPlaying, setIsPlaying] = useState(false);
  let [currentTime, setCurrentTime] = useState(() => calculateDuration(0));
  let [duration, setDuration] = useState(() => calculateDuration(0));
  let [playerActive, setplayerActive] = useState(false);

  let player = useRef();
  /*   console.log("app"); */

  useEffect(() => {
    console.dir(player.current);
  }, []);

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
  /* Responsible for isActive too */
  let onCanPlay = () => {
    if (isPlaying) {
      player.current.play();
    }
  };

  let onTimeUpdate = () => {
    setCurrentTime(player.current.currentTime);
  };

  let onLoadMeta = () => {
    setDuration(player.current.duration + 3);
  };

  let specificSong = (id) => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (id !== count) {
        setCount(id);
        setplayerActive(true);
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
    setplayerActive(false);
  };

  return (
    <Wrapper id="music" title="Music">
      <audio
        type="audio/mpeg"
        ref={player}
        src={count ? songs[count].link : null}
        onCanPlay={onCanPlay}
        onEnded={nextSong}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadMeta}
      ></audio>
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
      />
    </Wrapper>
  );
}

export default Music;
