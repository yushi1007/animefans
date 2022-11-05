import React from "react";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
  console.log(episode);
  return (
    <div className="episode-card">
      <Link to={`/watch/${episode?.episodeId}`}>{episode.episodeNum}</Link>
    </div>
  );
};

export default EpisodeCard;
