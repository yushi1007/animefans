import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchPopular } from "../data/fetchAnimeApi";
import AnimeLists from "../components/AnimeLists";
import Loader from "../components/Loader";

const Popular = () => {
  const location = useLocation();

  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setPopular([]);
    fetchPopular().then((data) => {
      setPopular(data);
      if (popular) {
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
          <div className={location.pathname === "/popular" ? "lists-box popular-box" : "lists-box"}>
            <h1>Popular</h1>
            <AnimeLists animeLists={popular} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popular;
