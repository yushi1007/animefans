import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigationItems, genres } from "../data/data";
import SearchBox from "../components/SearchBox";
import logo from "../assets/img/animefans_logo.png";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleBg);
    return () => window.removeEventListener("scroll", handleBg);
  });

  const handleBg = () => {
    const background =
      window.scrollY > 50 || showBg ? setBg(true) : setBg(false);

    setShowBg(background);
  };

  const handleScroll = () => {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
    setOpen(false);
    setOpenNavbar(false);
  };

  const handleNavbarClick = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  const openDropDown = () => {
    setOpen((open) => !open);
  };

  genres.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  return (
    <nav
      className={`
      ${visible ? "navbar" : "navbar--hidden"} 
      ${bg ? "navbar-background" : ""}
      `}
    >
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} width="35" height="35" alt="logo" />
            Anime<span style={{ color: "#e62429" }}>Fans</span>
          </a>
        </div>
        <div class="sm-search-box">
          <SearchBox />
        </div>
        <div
          className={openNavbar ? "hamburger active" : "hamburger"}
          onClick={handleNavbarClick}
        >
          <li className="line"></li>
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
          <li
            onClick={openDropDown}
            className={open ? "dropdown active" : "dropdown"}
          >
            <a>Genres</a>
            <ul className="mega-menu">
              {genres.map((genre, index) => {
                return (
                  <li key={index}>
                    <NavLink to={`/genre/${genre}`}>{genre}</NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <div class="lg-search-box">
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};

export default Header;
