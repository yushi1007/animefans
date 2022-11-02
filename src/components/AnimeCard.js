import React from "react";
import { Link } from "react-router-dom"

const AnimeCard = ({ animeList }) => {
  const checkAnimeInfo = () => {
    if (animeList.subOrDub) {
      return (
        <div className="card-details recent-release">
          <span className="subordub">{animeList.subOrDub}</span>
          <span className="episode">EP {animeList.episodeNum} </span>
        </div>
      );
    } else if (animeList.latestEp) {
      return (
        <div className="card-details top-airing">
          <span className="episode">EP {animeList.latestEp.substring(8)}</span>
        </div>
      );
    } else if (animeList.releasedDate) {
      return (
        <div className="card-details popular">
          <span>{animeList.releasedDate}</span>
        </div>
      );
    }
  };

  return (
    <div className="card">
      <div className="card-img">
        <Link to={`/anime-details/${animeList.animeId}`}>
          <img src={animeList.animeImg} alt={animeList.animeTitle} />
        </Link>
      </div>
      <div className="card-title">
        <Link to={`/anime-details/${animeList.animeId}`} title={animeList.animeTitle}>
          <h3>{animeList.animeTitle}</h3>
        </Link>
      </div>
      {checkAnimeInfo()}
    </div>
  );
};

export default AnimeCard;
