import React, { useState, useEffect } from "react";
import { fetchTopAiring } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";

const TopAiring = () => {
  const [topAiring, setTopAiring] = useState([]);

  useEffect(() => {
      fetchTopAiring().then((data) => setTopAiring(data));
  }, []);
  
  return (
    <div className="container">
        <div className="lists-box">
          <h1>Top Airing</h1>
          <AnimeLists animeLists={topAiring} />
        </div>
      </div>
  );
};

export default TopAiring;
