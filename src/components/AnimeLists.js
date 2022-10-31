import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeLists = ({ animeLists }) => {
  return (
    <div className="card-box">
      {animeLists.map((animeItem, index) => {
        return (
          <div key={index}>
            {animeItem.animeId && <AnimeCard animeList={animeItem} />}
          </div>
        );
      })}
    </div>
  );
};

export default AnimeLists;
