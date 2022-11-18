import React from "react";
import ReactPlayer from "react-player";
import Loader from "./Loader";

const AnimePlayer = ({ video }) => {
  if(!video) return <Loader />
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={video?.[0]?.file}
        className="react-player"
        width="100%"
        height="100%"
        alt="Video Not Available"
        controls={true}
      />
    </div>
  );
};

export default AnimePlayer;
