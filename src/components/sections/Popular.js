import React, { useState, useEffect } from "react";
import { fetchPopular } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = () => {
      fetchPopular().then((data) => setPopular(data));
    };
    getPopular();
  }, []);

  return (
    <React.Fragment>
      <GenresSection />
      <div className="container">
        <div className="lists-box">
          <h1>Popular</h1>
          <AnimeLists animeLists={popular} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popular;
