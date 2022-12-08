import React from "react";
import logo from "../../asset/img/animefans_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-box">
          <div className="footer-logo logo">
            <a href="/">
              <img src={logo} width="35" height="35" alt="logo" />
              Anime<span style={{ color: "#e62429" }}>Fans</span>
            </a>
          </div>
          <ul className="foot-menu">
            <li>
              <a href="/movies">Movie</a>
            </li>
            <li>
              <a href="/popular">Popular</a>
            </li>
            <li>
              <a href="/topairing">Top Airing</a>
            </li>
          </ul>
          <div className="footer-text">
            This site does not store any files on its server. All contents are
            provided by non-affiliated third parties.
          </div>
          <p>&copy; AnimaFans</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
