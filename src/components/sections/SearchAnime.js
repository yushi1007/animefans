import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenresSection from "./GenreSection";
import { fetchSearchTerm } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import ErrorMessage from "../ErrorMessage";

const SearchAnime = () => {
  const { searchTerm } = useParams();
  const [searchedAnime, setSearchedAnime] = useState([]);

  useEffect(() => {
    const getSearchTerm = (term) => {
      fetchSearchTerm(`?keyw=${term}`).then((data) => {
        console.log(data);
        setSearchedAnime(data);
      });
    };
    getSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <React.Fragment>
      {searchedAnime.length === 0 ? (
        <div className="container error-page">
          <ErrorMessage />
        </div>
      ) : (
        <React.Fragment>
          <GenresSection />
          <div className="container">
            <div className="lists-box">
              <h1>Search result for "{searchTerm}"</h1>
              <AnimeLists animeLists={searchedAnime} />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SearchAnime;
