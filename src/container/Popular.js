import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchPopular } from "../data/fetchAnimeApi";
import AnimeLists from "../components/AnimeLists";
import Loader from "../components/Loader";
import Paginator from "../components/Paginator";

const Popular = () => {
  const location = useLocation();

  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= 504; i++) {
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
    setPopular([]);
    fetchPopular(currentPage).then((data) => {
      setPopular(data);
      if (popular) {
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
              location.pathname === "/popular"
                ? "lists-box popular-box"
                : "lists-box"
            }
          >
            <h1>Popular</h1>
            <AnimeLists animeLists={popular} />
          </div>
          {location.pathname === "/popular" && (
            <div className="paginator">
              <ul className="page-numbers">
                <li>
                  <button
                    onClick={handlePrevButton}
                    disabled={currentPage === pages[0] ? true : false}
                  >
                    Prev
                  </button>
                </li>
                {pageDecrementButton}
                {renderPageNumbers}
                {pageIncrementButton}
                <li>
                  <button
                    onClick={handleNextButton}
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Popular;
