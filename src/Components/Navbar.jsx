import React from "react";

import "./navbar.styles.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">copyboard</a>
      </div>
      <div className="navbar__menu">
        <ul className="navbar__menu-lists">
          <li>
            <a className="nav-link" href="#news">
              News
            </a>
          </li>
          <li>
            <a className="nav-link" href="#music">
              Music
            </a>
          </li>
          <li>
            <a className="nav-link" href="#video">
              Videos
            </a>
          </li>
          <li>
            <a className="nav-link" href="#bands">
              Bands
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__subscribe">
        <input type="checkbox" id="subscribe" />
        <label className="navbar__subscribe-btn" htmlFor="subscribe">
          Subscribe
        </label>
        <div className="navbar__subscribe-field">
          <input type="email" placeholder="Email Address" id="input" />
          <label htmlFor="subscribe" className="subscribe-btn2">
            Subscribe
          </label>
        </div>
        <div className="navbar__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
