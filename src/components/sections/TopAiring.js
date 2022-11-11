import React, { useState, useEffect } from "react";
import { fetchTopAiring } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import Loader from "../Loader";

const TopAiring = () => {
  const [topAiring, setTopAiring] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTopAiring([]);
    fetchTopAiring().then((data) => {
      setTopAiring(data);
      if (topAiring) {
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
            <h1>Top Airing</h1>
            <AnimeLists animeLists={topAiring} />
          </div>
        </div>
      )}
    </>
  );
};

export default TopAiring;
