import React from "react";
import { navigationItems } from "../data/data";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <nav className="container">
      <a href="/" className="logo">
        Anime<span style={{ color: "deepskyblue" }}>Fans</span>
      </a>
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
