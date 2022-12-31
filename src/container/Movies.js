import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../data/fetchAnimeApi";
import AnimeLists from "../components/AnimeLists";
import Loader from "../components/Loader";
import Paginator from "../components/Paginator";

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 89;

  useEffect(() => {
    setIsLoading(true);
    setMovies([]);
    fetchMovies(currentPage).then((data) => {
      setMovies(data);
      if (movies) {
        setIsLoading(false);
      }
    });
  }, [currentPage]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div
            className={
              location.pathname === "/movies"
                ? "lists-box movies-box"
                : "lists-box"
            }
          >
            <h1>Movies</h1>
            <AnimeLists animeLists={movies} />
          </div>
        </div>
      )}
      <div className="paginator">
        <Paginator totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default Movies;
