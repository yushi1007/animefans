import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchGenre } from "../data/fetchAnimeApi";
import AnimeLists from "../components/AnimeLists";

const GenreAnime = () => {
  const location = useLocation();
  const { genre } = useParams();
  const [genreData, setGenreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  useEffect(() => {
    setIsLoading(true);
    setGenreData([]);
    const getGenre = (term) => {
      fetchGenre(term).then((data) => {
        setGenreData(data);
        if (genreData) {
          setIsLoading(false);
        }
      });
    };
    getGenre(genre);
  }, [genre]);

  return (
    <div className="container">
      <div
        className={
          location.pathname.includes("/genre")
            ? "lists-box genre-anime-box"
            : "lists-box"
        }
      >
        <h1>{genre} Anime</h1>
        <AnimeLists animeLists={genreData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default GenreAnime;
