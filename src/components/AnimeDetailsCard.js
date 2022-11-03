import React from "react";
import AnimeGenres from "./AnimeGenres";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AnimeDetailsCard = ({ animeDetails }) => {
  console.log(animeDetails);
  const genreItems = animeDetails?.genres?.map((genre, index) => {
    return <AnimeGenres key={index} genre={genre} />;
  });

  if (!animeDetails) return <div>loading...</div>;

  return (
    <div className="details-card">
      <div className="card-thumbnail">
        <img src={animeDetails?.animeImg} />
      </div>
      <div className="card-body">
        <span className="anime-title">{animeDetails?.animeTitle}</span>
        <span className="anime-title-two">{animeDetails?.otherNames}</span>
        <p>
          <span className="date">{animeDetails?.releasedDate}</span>
          {genreItems}
        </p>
        <p className="card-description">{animeDetails?.synopsis}</p>
        <button className="watchnow-btn">
          <FontAwesomeIcon className="icon" icon={faPlay} />
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
};

export default AnimeDetailsCard;
