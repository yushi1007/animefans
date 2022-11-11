import React, { useState, useEffect } from "react";
import { fetchPopular } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
      fetchPopular().then((data) => setPopular(data));
  }, []);

  return (
      <div className="container">
        <div className="lists-box">
          <h1>Popular</h1>
          <AnimeLists animeLists={popular} />
        </div>
      </div>
  );
};

export default Popular;
