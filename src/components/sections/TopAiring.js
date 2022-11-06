import React, { useState, useEffect } from "react";
import { fetchTopAiring } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";

const TopAiring = () => {
  const [topAiring, setTopAiring] = useState([]);

  useEffect(() => {
    const getTopAiring = () => {
      fetchTopAiring().then((data) => setTopAiring(data));
    };
    getTopAiring();
  }, []);
  return (
    <React.Fragment>
      <GenresSection />
      <div className="container">
        <div className="lists-box">
          <h1>Top Airing</h1>
          <AnimeLists animeLists={topAiring} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopAiring;
