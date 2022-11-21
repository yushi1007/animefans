import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

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
  if (!animeList) return <Loader />;
  return (
    <div className="card">
      <Link className="card-link" to={`/anime-details/${animeList.animeId}`}>
        <div
          className="card-img"
          style={{ backgroundImage: `url(${animeList.animeImg})` }}
        ></div>
      </Link>
      <Link
        className="card-title-link"
        to={`/anime-details/${animeList.animeId}`}
        title={animeList.animeTitle}
      >
        <div className="card-title">
          <h3>{animeList.animeTitle}</h3>
        </div>
      </Link>
      {checkAnimeInfo()}
    </div>
  );
};

export default AnimeCard;
