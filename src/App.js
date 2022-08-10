import { useState, useContext } from "react";
import "./app.styles.scss";

/* Components */
import Bands from "./Layouts/Bands";
import Hero from "./Layouts/Hero";
import MoreNews from "./Layouts/MoreNews";
import Navbar from "./Components/Navbar";
import News from "./Layouts/News";
import TestNews from "./Layouts/TestNews";
import Media from "./Layouts/Media";
import Footer from "./Layouts/Footer";

/* Framer Motion */
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, easings: [0, 0.71, 0.2, 1.01] }}
      className="App"
    >
      <Navbar />
      <Hero />
      <TestNews />
      {/*    <News /> */}
      <Media />
      <Bands />
      <MoreNews />
      <Footer />
    </motion.div>
  );
}

export default App;
