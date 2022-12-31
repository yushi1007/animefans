import React from "react";
import AnimeCard from "./AnimeCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const AnimeLists = ({ animeLists, isLoading }) => {
  const renderAnimes = animeLists.map((anime, index) => {
    return (
      <div key={index}>{anime.animeId && <AnimeCard animeList={anime} />}</div>
    );
  });

  return (
    <React.Fragment>
      {animeLists?.length > 0 ? (
        <div className="card-box">{renderAnimes}</div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="container error-page">
          <ErrorMessage />
        </div>
      )}
    </React.Fragment>
  );
};

export default AnimeLists;
