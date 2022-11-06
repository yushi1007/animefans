import React from "react";
import { NavLink } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
  console.log(episode);
  return (
    <NavLink className="episode-link" to={`/watch/${episode?.episodeId}`} >
      <div className="episode-card">{episode?.episodeNum}</div>
    </NavLink>
  );
};

export default EpisodeCard;
