import React, { useState, useEffect } from "react";
import { fetchPopular } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import Loader from "../Loader";

const Popular = () => {
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
          <div className="lists-box">
            <h1>Popular</h1>
            <AnimeLists animeLists={popular} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popular;
