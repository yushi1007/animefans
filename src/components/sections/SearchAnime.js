import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchSearchTerm } from "../../data/fetchAnimeApi";
import AnimeLists from "../AnimeLists";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";

const SearchAnime = () => {
  const location = useLocation();
  const { searchTerm } = useParams();
  const [searchedAnime, setSearchedAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setSearchedAnime([]);
    const getSearchTerm = (term) => {
      fetchSearchTerm(`?keyw=${term}`).then((data) => {
        setSearchedAnime(data);
        if (searchedAnime) {
          setIsLoading(false);
        }
      });
    };
    getSearchTerm(searchTerm);
  }, [searchTerm]);

  if(isLoading) return <Loader />;
  return (
    <React.Fragment>
      {searchedAnime.length === 0 ? (
        <div className="container error-page">
          <ErrorMessage />
        </div>
      ) : (
          <div className="container">
            <div className={location.pathname.includes("/search") ? "lists-box search-anime-box" : "lists-box"}>
              <h1>Search result for "{searchTerm}"</h1>
              <AnimeLists animeLists={searchedAnime} />
            </div>
          </div>
      )}
    </React.Fragment>
  );
};

export default SearchAnime;
