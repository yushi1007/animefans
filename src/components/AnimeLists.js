import AnimeCard from "./AnimeCard";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const AnimeLists = ({ animeLists, isLoading }) => {
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
