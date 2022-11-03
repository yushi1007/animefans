import React from "react";
import AnimeGenres from "./AnimeGenres";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

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
        <span className="card-title">{animeDetails?.animeTitle}</span>
        <span className="card-title-two">{animeDetails?.otherNames}</span>
        <p>
          <span className="date">{animeDetails?.releasedDate}</span>
          {genreItems}
        </p>
        <p>
          {animeDetails?.synopsis}
        </p>
        <button className="video">
        <FontAwesomeIcon className="icon" icon={faPlay} />
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default AnimeDetailsCard;
