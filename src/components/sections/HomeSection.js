import React, { useState, useEffect } from "react";
import { fetchTopAiring, fetchAnimeDetails } from "../../data/fetchAnimeApi";
import Home from "../Home";

const HomeSection = () => {
  const [topAiring, setTopAiring] = useState([]);
//   const [homeData, setHomeData] = useState([]);

  useEffect(() => {
      fetchTopAiring().then((data) => setTopAiring(data));
    // const topAiringItems = topAiring.slice(0, 5).map((item) => {
    //     fetchAnimeDetails(`${item.animeId}`)
    //       .then((data) => data)
    //       .then((data) => {
    //         setHomeData(data);
    //       });
    //   });
  }, []);

  return (
    <>
        <section className="home">
            <Home topAiring={topAiring} />
        </section>
        <div className="margin"></div>
    </>
  )
};

export default HomeSection;
