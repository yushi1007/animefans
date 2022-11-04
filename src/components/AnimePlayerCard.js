import React from "react";
import ReactPlayer from 'react-player'

const AnimePlayer = ({ video }) => {
  return (
    <div className="player-box">
      <ReactPlayer
        url={video?.[0]?.file}
        className="react-player"
        alt="Video Not Available"
        controls
      />
    </div>
  );
};

export default AnimePlayer;
