import React, { useState } from "react";
import AnimeGenreCard from "./AnimeGenreCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

const AnimeDetailsCard = ({ animeDetails, handleStatus }) => {
  const [readMore, setReadMore] = useState(false);

  const genreItems = animeDetails?.genres?.map((genre, index) => {
    return <AnimeGenreCard key={index} genre={genre} />;
  });

  const checkEpLength = () => {
    if (!animeDetails?.error) {
      return "/watch/" + animeDetails?.episodesList[0]?.episodeId;
    } else {
      return "/";
    }
  };

  const toggleReadMore = () => {
    setReadMore((readMore) => !readMore);
  };

  const synopsisLength = () => {
    if (animeDetails?.synopsis.length < 350) {
      return true;
    } else {
      return false;
    }
  };

  if (!animeDetails) return <Loader />;
  return (
    <div className="details-card-box">
      <div className="details-card">
        <div className="card-thumbnail">
          <img
            className="anime-detail-img set-bg"
            src={animeDetails?.animeImg}
            alt={animeDetails?.animeTitle}
          />
        </div>
        <div className="card-body">
          <div className="card-body-text">
            <div className="anime-title">
              <h3>{animeDetails?.animeTitle}</h3>
              <span>{animeDetails?.otherNames}</span>
            </div>
            <div className="genre-box">{genreItems}</div>
            <p className="card-description">
              {readMore
                ? animeDetails?.synopsis
                : animeDetails?.synopsis.substring(0, 350)}
              {synopsisLength() ? (
                ""
              ) : (
                <button className="read-more-btn" onClick={toggleReadMore}>
                  {readMore ? "Read Less" : "...Read More"}
                </button>
              )}
            </p>
            <div className="anime-details-widget">
              <div className="row">
                <div className="row-item-lg row-item-md">
                  <ul>
                    <li>
                      <span className="type">Type:</span>
                      {animeDetails?.type}
                    </li>
                    <li>
                      <span className="date">Released:</span>
                      {animeDetails?.releasedDate}
                    </li>
                  </ul>
                </div>
                <div className="row-item-lg row-item-md">
                  <ul>
                    <li>
                      <span className="type">Status:</span>
                      {animeDetails?.status}
                    </li>
                    <li>
                      <span className="date">Episodes:</span>
                      {animeDetails?.totalEpisodes}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {handleStatus ? (
              <div className="coming-soon">Coming soon</div>
            ) : (
              <Link to={checkEpLength()}>
                <button className="watchnow-btn">
                  <FontAwesomeIcon className="icon" icon={faPlay} />
                  <span>Watch Now</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsCard;
