import React from "react";
import AnimeGenres from "./AnimeGenres";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AnimeDetailsCard = ({ animeDetails }) => {
  const genreItems = animeDetails?.genres?.map((genre, index) => {
    return <AnimeGenres key={index} genre={genre} />;
  });

  const checkEpLength = () => {
    if(!animeDetails?.error) {
      return '/watch/' + animeDetails?.episodesList[0]?.episodeId;
    } else {
      return '/'
    }
  }
  if (!animeDetails) return <div>loading...</div>;

  return (
    <div className="details-card">
      <div className="card-thumbnail">
        <img src={animeDetails?.animeImg} />
      </div>
      <div className="card-body">
        <span className="anime-title">{animeDetails?.animeTitle}</span>
        <span className="anime-title-two">{animeDetails?.otherNames}</span>
        <div className="genre-box">{genreItems}</div>
        <p className="card-description">{animeDetails?.synopsis}</p>
        <div className="anime-details-widget">
          <div className="row">
            <div className="row-item">
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
            <div className="row-item">
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
        <Link to={checkEpLength()}>
          <button className="watchnow-btn">
            <FontAwesomeIcon className="icon" icon={faPlay} />
            <span>Watch Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AnimeDetailsCard;
