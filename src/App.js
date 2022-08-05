import "./app.styles.scss";
import Bands from "./Layouts/Bands";
import Hero from "./Layouts/Hero";
import MoreNews from "./Layouts/MoreNews";
import Music from "./Layouts/Music";
import Navbar from "./Components/Navbar";
import News from "./Layouts/News";
import Video from "./Layouts/Video";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Music />
      <Video />
      <Bands />
      <MoreNews />
    </div>
  );
}

export default App;
