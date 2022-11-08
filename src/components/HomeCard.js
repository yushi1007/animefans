import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HomeCard = ({
  topAiringItem: { animeId, animeImg, animeTitle, genres, latestEp },
}) => {
  return (
    <div className="box">
      <div className="coverImage">
        <img src={animeImg} alt="anime_image" />
      </div>
      <div className="content flex">
        <div className="details row">
          <h1>{animeTitle}</h1>
          <div className="cast">
            <h4>
              <span>Latest Episode</span>
              {latestEp}
            </h4>
            <h4>
              <span>Genres</span>
              {genres?.map((genre, index) => {
                return <h4 key={index}>{genre}</h4>;
              })}
            </h4>
          </div>
          <button className="watchnow-btn">
            <FontAwesomeIcon className="icon" icon={faPlay} />
            <span>Watch Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
