import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HomeCard = ({
  topAiringItem: { animeId, animeImg, animeTitle, genres, latestEp },
}) => {
  const latestEpisode = latestEp.replace("Episode", "");
  return (
    <div className="main-slider-box">
      <Link to={`/anime-details/${animeId}`} className="main-slider-overlay">
        <FontAwesomeIcon className="icon" icon={faPlay} />
      </Link>
      <div className="main-slider-img">
        <img src={animeImg} alt="poster" />
      </div>
      <div className="main-slider-text">
        <span className="quality">Ep {latestEpisode}</span>
        <div className="bottom-text">
          <div className="movie-name">
            <strong>{animeTitle}</strong>
          </div>
          <div className="category-list">
            <div className="category">
              {genres?.map((genre, index) => {
                return (
                  <a key={index} href="#">
                    {genre} <span>{index < genres.length - 1 ? ", " : ""}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
