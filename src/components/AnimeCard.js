import React from "react";

const AnimeCard = ({ animeList }) => {
  return (
    <div className="card">
      <a href="#">
        <div className="card-img">
          <img src={animeList.animeImg} alt={animeList.animeTitle} />
        </div>
      </a>
      <a href="#" title={animeList.animeTitle}>
        <h3 className="card-title">{animeList.animeTitle}</h3>
      </a>
      <div className="card-details">
        <span className="subordub">{animeList.subOrDub}</span>
        <span className="episode">EP {animeList.episodeNum} </span>
      </div>
    </div>
  );
};

export default AnimeCard;
