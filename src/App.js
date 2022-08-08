import { useState, useContext } from "react";
import "./app.styles.scss";

/* Components */
import Bands from "./Layouts/Bands";
import Hero from "./Layouts/Hero";
import MoreNews from "./Layouts/MoreNews";
import Music from "./Layouts/Music";
import Navbar from "./Components/Navbar";
import News from "./Layouts/News";
import Video from "./Layouts/Video";
import Media from "./Layouts/Media";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Media />
      <Bands />
      <MoreNews />
    </div>
  );
}

export default App;
