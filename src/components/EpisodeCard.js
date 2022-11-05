import React from "react";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
  console.log(episode);
  return (
    <Link className="episode-link" to={`/watch/${episode?.episodeId}`} activeClass="active">
      <div className="episode-card">{episode?.episodeNum}</div>
    </Link>
  );
};

export default EpisodeCard;
