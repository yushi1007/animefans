import React, { useState, useEffect } from "react";
import AnimeLists from "../AnimeLists";
import { fetchRecentRelease } from "../../data/fetchAnimeApi";

const RecentRelease = () => {
  const [recentRelease, setRecentRelease] = useState([]);

  useEffect(() => {
    fetchRecentRelease().then((data) => setRecentRelease(data));
  }, []);

  return (
    <div className="container">
      <div className="lists-box">
        <h1>Recent Released</h1>
        <AnimeLists animeLists={recentRelease} />
      </div>
    </div>
  );
};

export default RecentRelease;
