import React, { useState, useEffect } from "react";
import AnimeLists from "../components/AnimeLists";
import { fetchRecentRelease } from "../data/fetchAnimeApi";

const RecentRelease = () => {
  const [recentRelease, setRecentRelease] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setRecentRelease([]);
    fetchRecentRelease().then((data) => {
      setRecentRelease(data);
      if (recentRelease) {
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="lists-box recent-release-box">
        <h1>Recent Released</h1>
        <AnimeLists animeLists={recentRelease} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default RecentRelease;
