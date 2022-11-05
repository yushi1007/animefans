import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";

const Movies = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const getMovies = () => {
        fetchMovies().then((data) => setMovies(data));
      };
      getMovies();
    }, []);

  return (
    <React.Fragment>
    <GenresSection />
    <div className="container">
      <div className="lists-box">
        <h1>Movies</h1>
        <AnimeLists animeLists={movies} />
      </div>
    </div>
  </React.Fragment>
  )
}

export default Movies