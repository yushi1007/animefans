import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import Loader from "../Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setMovies([]);
    fetchMovies().then((data) => {
      setMovies(data);
      if (movies) {
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="lists-box">
            <h1>Movies</h1>
            <AnimeLists animeLists={movies} />
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
