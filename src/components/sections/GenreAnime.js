import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGenre } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";

const GenreAnime = () => {
  const { genre } = useParams();
  const [genreData, setGenreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getGenre = (term) => {
      fetchGenre(term).then((data) => {
        setGenreData(data);
      })
    };
    setIsLoading(false);
    getGenre(genre);
  }, [genre, genreData]);
  
  return (
    <React.Fragment>
      <GenresSection />
      <div className="container">
        <div className="lists-box">
          <h1>{genre} Anime</h1>
          <AnimeLists animeLists={genreData} isLoading={isLoading} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenreAnime;
