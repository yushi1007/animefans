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
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= 89; i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((pageNumber) => {
    if (
      pageNumber < maxPageNumberLimit + 1 &&
      pageNumber > minPageNumberLimit
    ) {
      return (
        <Paginator
          key={pageNumber}
          id={pageNumber}
          pageNumber={pageNumber}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      );
    } else {
      return null;
    }
  });

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

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementButton = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementButton = <li onClick={handleNextButton}> &hellip; </li>;
  }

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = <li onClick={handlePrevButton}> &hellip; </li>;
  }

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
          <div className="paginator">
            <ul className="page-numbers">
              <li
                onClick={handlePrevButton}
                disabled={currentPage === pages[0] ? true : false}
              >
                Prev
              </li>
              {pageDecrementButton}
              {renderPageNumbers}
              {pageIncrementButton}
              <li
                onClick={handleNextButton}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                Next
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
