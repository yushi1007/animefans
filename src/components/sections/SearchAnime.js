import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchSearchTerm } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import ErrorMessage from "../ErrorMessage";

const SearchAnime = () => {
  const location = useLocation();
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
          <div className="container">
            <div className={location.pathname.includes("/search") ? "lists-box search-box" : "lists-box"}>
              <h1>Search result for "{searchTerm}"</h1>
              <AnimeLists animeLists={searchedAnime} />
            </div>
          </div>
      )}
    </React.Fragment>
  );
};

export default SearchAnime;
