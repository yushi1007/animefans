import React from "react";
import { NavLink } from 'react-router-dom'

const AnimeGenres = ({ genre }) => {
  return (
  <div className="anime-genre">
    <NavLink to={`/genre/${genre}`}>{genre}</NavLink>
  </div>
  )
};

export default AnimeGenres;
