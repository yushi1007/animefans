import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGenre } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import Loader from "../Loader";

const GenreAnime = () => {
  const { genre } = useParams();
  const [genreData, setGenreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="lists-box">
            <h1>{genre} Anime</h1>
            <AnimeLists animeLists={genreData} isLoading={isLoading} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default GenreAnime;
