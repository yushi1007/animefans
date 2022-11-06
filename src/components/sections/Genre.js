import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGenre } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import GenresSection from "./GenreSection";

const Genre = () => {
  const { genre } = useParams();
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const getGenre = (term) => {
      fetchGenre(term).then((data) => setGenreData(data));
    };
    getGenre(genre);
  }, [genreData]);
  if (!genreData) return <div>loading...</div>;
  return (
    <React.Fragment>
      <GenresSection />
      <div className="container">
        <div className="lists-box">
          <h1>{genre} Anime</h1>
          <AnimeLists animeLists={genreData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Genre;
