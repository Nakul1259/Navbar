import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import data, { links, social } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="section">
      <div className="navbar">
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>

        <div className="list-items">
          {showLinks && (
            <div className="nav-links">
              <div className="links">
                <ul>
                  {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li key={id}>
                        <a href={url}>{text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          <div className="social-icons">
            <div className="icons">
              <ul>
                {social.map((socials) => {
                  const { id, url, icon } = socials;
                  return (
                    <li key={id}>
                      <a href={url}>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
