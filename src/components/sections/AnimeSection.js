import React, { useState, useEffect } from "react";
import {
  fetchRecentRelease,
  fetchTopAiring,
  fetchPopular,
} from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";
import HomeSection from "./HomeSection";

const AnimeSection = () => {
  const [recentRelease, setRecentRelease] = useState([]);
  const [topAiring, setTopAiring] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getRecentRelease = () => {
      fetchRecentRelease().then((data) => setRecentRelease(data));
    };

    const getTopAiring = () => {
      fetchTopAiring().then((data) => setTopAiring(data));
    };

    const getPopular = () => {
      fetchPopular().then((data) => setPopular(data));
    };

    getRecentRelease();
    getTopAiring();
    getPopular();
  }, []);

  return (
    <React.Fragment>
      <HomeSection />
      {/* <GenresSection /> */}
      <div className="container">
        <div className="lists-box">
          <h1>Recent Released</h1>
          <AnimeLists animeLists={recentRelease} />
        </div>
        <div className="lists-box">
          <h1>Top Airing</h1>
          <AnimeLists animeLists={topAiring} />
        </div>
        <div className="lists-box">
          <h1>Popular</h1>
          <AnimeLists animeLists={popular} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnimeSection;
