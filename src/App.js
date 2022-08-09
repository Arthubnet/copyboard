import { useState, useContext } from "react";
import "./app.styles.scss";

/* Components */
import Bands from "./Layouts/Bands";
import Hero from "./Layouts/Hero";
import MoreNews from "./Layouts/MoreNews";
import Navbar from "./Components/Navbar";
import News from "./Layouts/News";
import Media from "./Layouts/Media";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Media />
      <Bands />
      <MoreNews />
      <Footer />
    </div>
  );
}

export default App;
