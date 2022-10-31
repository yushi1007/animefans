import React, { useState, useEffect } from "react";
import { fetchRecentRelease } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";

const AnimeSection = () => {
  const [recentRelease, setRecentRelease] = useState([]);

  useEffect(() => {
    const getRecentRelease = () => {
        fetchRecentRelease().
        then((data) => setRecentRelease(data))
    }
    getRecentRelease()
  }, [])

  return (
      <div className="container">
        <div className="lists-box">
            <h1>Recent Released</h1>
            <AnimeLists animeLists={recentRelease}/>
        </div>
      </div>
  ) 
};

export default AnimeSection;
