import React, { useState, useEffect } from "react";
import AnimeLists from "../AnimeLists";
import { fetchRecentRelease } from "../../data/fetchAnimeApi";
import Loader from "../Loader";

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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="lists-box">
            <h1>Recent Released</h1>
            <AnimeLists animeLists={recentRelease} />
          </div>
        </div>
      )}
    </>
  );
};

export default RecentRelease;
