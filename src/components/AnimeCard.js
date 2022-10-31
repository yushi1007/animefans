import React from "react";

const AnimeCard = ({ animeList }) => {
  console.log(animeList.animeImg);
  return (
    <div className="card">
      <div className="card-img">
        <img src={animeList.animeImg} alt={animeList.animeTitle} />
      </div>
      <h3 className="card-title">{animeList.animeTitle}</h3>
      <span className="card-details">
        EP {animeList.episodeNum} | {animeList.subOrDub}
      </span>
    </div>
  );
};

export default AnimeCard;
