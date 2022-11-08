import React from "react";
import { NavLink } from 'react-router-dom'
import { navigationItems, genres } from "../data/data";
import SearchBox from "./SearchBox";
import logo from "../asset/img/animefans_logo.png";

const Header = () => {
  return (
    <nav>
      <div className="container">
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
          <li className="genres-hover">
            <a href="#">Genres</a>
            <ul className="mega-menu">
              {genres.map((genre, index) => {
                return (
                  <li key={index}>
                     <NavLink to={`/genre/${genre}`}>{genre}</NavLink>
                  </li>
                )
              })}
            </ul>
          </li>

        </ul>
        <SearchBox />
      </div>
    </nav>
  );
};

export default Header;
