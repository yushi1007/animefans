import React from "react";
import { navigationItems } from "../data/data";
import SearchBox from "./SearchBox";
import logo from "../asset/img/animefans_logo.png";

const Header = () => {
  return (
    <nav className="container">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
          Anime<span style={{ color: "#e62429" }}>Fans</span>
        </a>
      </div>
      <ul className="menu">
        {navigationItems.map((navigationItem, index) => {
          const { name, href } = navigationItem;
          return (
            <li key={index}>
              <a href={href}>{name}</a>
            </li>
          );
        })}
      </ul>
      <SearchBox />
    </nav>
  );
};

export default Header;
