import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchTopAiring } from "../data/fetchAnimeApi";
import AnimeLists from "../components/AnimeLists";
import Loader from "../components/Loader";

const TopAiring = () => {
  const location = useLocation();
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
          <div className={location.pathname === "/topairing" ? "lists-box topairing-box" : "lists-box"}>
            <h1>Top Airing</h1>
            <AnimeLists animeLists={topAiring} />
          </div>
        </div>
      )}
    </>
  );
};

export default TopAiring;
