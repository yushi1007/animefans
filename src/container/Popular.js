import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchPopular } from "../data/fetchAnimeApi";
import AnimeLists from "../components/AnimeLists";
import Paginator from "../components/Paginator";

const Popular = () => {
  const location = useLocation();
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 504;

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

  return (
    <div className="container">
      <div
        className={
          location.pathname === "/popular"
            ? "lists-box popular-box"
            : "lists-box"
        }
      >
        <h1>Popular</h1>
        <AnimeLists animeLists={popular} isLoading={isLoading} />
      </div>
      {location.pathname === "/popular" && (
        <div className="paginator">
          <Paginator totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default Popular;
