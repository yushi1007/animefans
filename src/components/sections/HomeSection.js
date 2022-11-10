import React, { useState, useEffect } from "react";
import { fetchTopAiring, fetchAnimeDetails } from "../../data/fetchAnimeApi";
import Home from "../Home";

const HomeSection = () => {
  const [topAiring, setTopAiring] = useState([]);

  useEffect(() => {
      fetchTopAiring().then((data) => setTopAiring(data));
  }, []);

  return (
        <section className="container">
            <Home topAiring={topAiring} />
        </section>
  )
};

export default HomeSection;
