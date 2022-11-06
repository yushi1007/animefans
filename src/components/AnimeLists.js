import React from "react";
import AnimeCard from "./AnimeCard";
import Loader from "./Loader";

const AnimeLists = ({ animeLists, isLoading }) => {
  if (isLoading) return <Loader />;
  return (
    <div className="card-box">
      {animeLists?.map((animeItem, index) => {
        return (
          <div key={index}>
            {animeItem.animeId && <AnimeCard animeList={animeItem} isLoading={isLoading}/>}
          </div>
        );
      })}
    </div>
  );
};

export default AnimeLists;
