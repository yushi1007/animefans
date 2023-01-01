import React, { useState, useEffect } from "react";

const Paginator = ({ totalPages, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [arrOfCurrentPageNum, setArrOfCurrentPageNum] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrentPageNum];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (pages.length < 6) {
      tempNumberOfPages = pages;
    } else if (currentPageNum >= 1 && currentPageNum <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pages.length];
    } else if (currentPageNum === 4) {
      const sliced = pages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pages.length];
    } else if (currentPageNum > 4 && currentPageNum < pages.length - 2) {
      const sliced1 = pages.slice(currentPageNum - 2, currentPageNum);
      const sliced2 = pages.slice(currentPageNum, currentPageNum + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pages.length,
      ];
    } else if (currentPageNum > pages.length - 3) {
      const sliced = pages.slice(pages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentPageNum === dotsInitial) {
      setCurrentPageNum(
        arrOfCurrentPageNum[arrOfCurrentPageNum.length - 3] + 1
      );
    } else if (currentPageNum === dotsRight) {
      setCurrentPageNum(arrOfCurrentPageNum[3] + 2);
    } else if (currentPageNum === dotsLeft) {
      setCurrentPageNum(arrOfCurrentPageNum[3] - 2);
    }

    setArrOfCurrentPageNum(tempNumberOfPages);
    setCurrentPage(currentPageNum);
  }, [currentPageNum]);

  const handleNextButton = () => {
    setCurrentPageNum((next) => (next >= pages.length ? next : next + 1));
  };

  const handlePrevButton = () => {
    setCurrentPageNum((prev) => (prev <= 1 ? prev : prev - 1));
  };

  return (
    <ul className="page-numbers">
      <li
        onClick={handlePrevButton}
        disabled={currentPageNum === pages[0] ? true : false}
      >
        Prev
      </li>
      {arrOfCurrentPageNum.map((pageNumber, index) => {
        return (
          <li
            key={index}
            className={`${currentPageNum === pageNumber ? "active" : ""}`}
            onClick={() => setCurrentPageNum(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        onClick={handleNextButton}
        disabled={currentPageNum === pages[pages.length - 1] ? true : false}
      >
        Next
      </li>
    </ul>
  );
};

export default Paginator;
