import React from "react";

const AnimeCard = ({ animeList }) => {
  console.log(animeList);
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
      <a href="#">
        <div className="card-img">
          <img src={animeList.animeImg} alt={animeList.animeTitle} />
        </div>
      </a>
      <a href="#" title={animeList.animeTitle}>
        <h3 className="card-title">{animeList.animeTitle}</h3>
      </a>
      {checkAnimeInfo()}
    </div>
  );
};

export default AnimeCard;
