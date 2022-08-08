import React, { useState } from "react";

import Music from "./Music";
import Video from "./Video";

const Media = () => {
  let [musicCount, setMusicCount] = useState(null);
  let [videoCount, setVideoCount] = useState(0);
  console.log("media:", musicCount);
  return (
    <div>
      <Music count={musicCount} setCount={setMusicCount} />
      <Video count={videoCount} setCount={setVideoCount} />
    </div>
  );
};

export default Media;
