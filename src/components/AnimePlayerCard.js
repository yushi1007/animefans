import React from "react";
import ReactPlayer from "react-player";
import Loader from "./Loader";

const AnimePlayer = ({ video, animeDetails }) => {
  if (!video) return <Loader />;
  return (
    <div className="player-wrapper">
      <div className="player">
        <ReactPlayer
          url={video?.[0]?.file}
          className="react-player"
          width="100%"
          height="100%"
          alt="Video Not Available"
          controls={true}
        />
      </div>
      <div className="player-details">
        <div className="player-content">
          <div className="anime-title">
            <h3>{animeDetails?.animeTitle}</h3>
            <span>{animeDetails?.otherNames}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimePlayer;
