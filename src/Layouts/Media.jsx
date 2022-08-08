import React, { useState } from "react";

import Music from "./Music";
import Video from "./Video";

const Media = () => {
  let [musicCount, setMusicCount] = useState();
  let [videoCount, setVideoCount] = useState();
  return (
    <div>
      <Music />
      <Video />
    </div>
  );
};

export default Media;
