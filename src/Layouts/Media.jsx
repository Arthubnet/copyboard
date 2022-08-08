import React, { useState, useRef } from "react";

import Music from "./Music";
import Video from "./Video";

/* Songs */
import brat from "../assets/songs/brat.mp3";
import krasivo from "../assets/songs/krasivo.mp3";
import marley from "../assets/songs/marley.mp3";
import norwise from "../assets/songs/nordwise.mp3";
import zdorovo from "../assets/songs/zdorovo.mp3";

function calculateDuration(songSeconds) {
  let minutes = Math.floor(songSeconds / 60);
  let returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = Math.floor(songSeconds % 60);
  let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
}

const Media = () => {
  let [songs, setSong] = useState([
    {},
    {
      id: 1,
      name: "Здорово",
      link: zdorovo,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX18sXfdWhtNOmakF5iJ6VzfxvEsrqZQgJvY1XXbDlnGuxWJjmCOigCZGGu5UINvnvjPUO8GprfSFEXFnFD5Sf9DJwJ%2fCxCvREgFKvFLbx%2fTlswqx%2bzJRRTkDJneJI8OyrJIf7Wn%2bnHjRfOwepSvu%2brAd0tdOwxtmPXwKfvcEiOyQmG4ZEDOgy8ox&s=youtube&id=&h=844019832527452011",
      artist: "Носков",
      duration: "4:17",
      cover: "https://i.scdn.co/image/ab67616d0000b273ac018113ff1b23da43f88e10",
    },
    {
      id: 2,
      name: "Брат",
      link: brat,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19NqLeNPgTA7VqZ9Zb6B4Jj7Ose6gMmxT39QGLslmc7uN0Ri%2bGTkAXfeJfJK%2fQaBb9OS5cVmNWnoVSSlDVtOnNe8826QMrd0Ht9ONkNSwHtDqIqUgnBtffQ&s=youtube&id=&h=844019832527452031",
      artist: "LeanJe",
      duration: "3:41",
      cover:
        "https://images.genius.com/39a9ee0ff3383b420394105dea72858b.1000x1000x1.jpg",
    },

    {
      id: 3,
      name: "Evolve II",
      link: norwise,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2bufA1IpiyHwJ7sBNzf%2fDQ70cq5GsIBDeH4TXbiwCqwQpr9SRkUa9cFqf1KR5rWifOWezv5lqueEyuNeyMb%2brzYNI0hc%2b9zRDxLFl3ceHJSJKLzlZ7RssI6gAXjlSo2fS7yDohOC%2fqQZmSr7fdKIsn8pxBHRFtX0sRPGXhLlyfwe36IT5ktiulG&s=youtube&id=&h=844019832527452015",
      artist: "Nordwise",
      duration: "3:50",
      cover: "https://f4.bcbits.com/img/a3784090808_16.jpg",
    },

    {
      id: 4,
      name: "Sun Is Shining",
      link: marley,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2be59DOjqaIapFZEjSeohGerdaYt38SaH1DjVnkSH2c0rflU6Yc%2bckFCOE%2fG3J8YVtjxALu20DetPijzxTD3ztECBOeVkeibcRiP67mSkZY0q99qjEAJmfqdSmcAbEHe1kgFEEayBmKcyFnJKoGIHbLZAGmIibVUXo%3d&s=youtube&id=&h=844019832527451710",
      artist: "Bob Marley",
      duration: "7:32",
      cover:
        "https://2.bp.blogspot.com/-gf_cbHxPwXk/UuNWput61VI/AAAAAAAABoo/ns2Sb0ufl1w/s1600/bob-marley.jpg",
    },
    {
      id: 5,
      name: "Красота",
      link: krasivo,
      path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19vqdf%2fCyVOD1nhGP7uMyPuBHOYOrPhOHt3aRw7WXaXvLHMXruiazfkdf2OIY4gINKK3Uji%2f7gOmPcdmG1s529ME3Yz%2f6THy3G4PfY5rK%2f8y7P%2b303UXHC9&s=youtube&id=&h=844019832527451705",
      artist: "Чайковська",
      duration: "4:17",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/avatar170s/cf42b9f1ee9a203818a64357ba5b2b1c",
    },
  ]);
  let [musicCount, setMusicCount] = useState(null);
  let [videoCount, setVideoCount] = useState(0);
  let [musicPlayerActive, setMusicPlayerActive] = useState(false);
  let [isPlaying, setIsPlaying] = useState(false);
  let [currentTime, setCurrentTime] = useState(() => calculateDuration(0));
  let [duration, setDuration] = useState(() => calculateDuration(0));
  let player = useRef();

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
  let onDurationChange = () => {
    player.current.pause();
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
        type="audio/mpeg"
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
        setVideoCount={setVideoCount}
        playerActive={musicPlayerActive}
        setPlayerActive={setMusicPlayerActive}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        songs={songs}
        player={player}
        setCurrentTime={setCurrentTime}
        setDuration={setDuration}
        currentTime={currentTime}
        duration={duration}
      />
      <Video
        count={videoCount}
        setCount={setVideoCount}
        setMusicCount={setMusicCount}
        player={player}
        setMusicPlayerActive={setMusicPlayerActive}
      />
    </div>
  );
};

export default Media;
