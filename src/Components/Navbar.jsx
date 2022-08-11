import React, { useState, useEffect } from "react";

import "./navbar.styles.scss";

import useWindowDimensions from "./../Hooks/useWindowDimensions";

/* framer motion */
import { motion, AnimatePresence } from "framer-motion";

let links = [
  { name: "News" },
  { name: "Music" },
  { name: "Video" },
  { name: "Bands" },
];

function Navbar() {
  let [menuActive, setMenutActive] = useState(false);
  let { width } = useWindowDimensions();

  useEffect(() => {
    if (menuActive) {
      if (width > 800) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "12px";
      }
    } else if (!menuActive) {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  }, [menuActive]);

  let menuAnimation = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  let listActive = {
    hidden: { x: 150, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.6 + i * 0.2, duration: 0.3 },
    }),
  };

  let toggleMenu = () => {
    setMenutActive((value) => !value);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">copyboard</a>
      </div>
      <div className="navbar__menu">
        <AnimatePresence exitBeforeEnter>
          {menuActive ? (
            <motion.ul
              className="navbar__menu-lists"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuAnimation}
            >
              {links.map((link, i) => (
                <motion.li
                  onClick={toggleMenu}
                  key={i}
                  variants={listActive}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                >
                  <a className="nav-link" href={`#${link.name.toLowerCase()}`}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>

      <div
        onClick={toggleMenu}
        className={`${menuActive ? "active " : ""}navbar__burger`}
      >
        {Array(3)
          .fill(1)
          .map((item, i) => (
            <span className={menuActive ? "active" : null} key={i}></span>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
