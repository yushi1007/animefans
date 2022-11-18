import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeDetails } from "../../data/fetchAnimeApi";
import AnimeDetailsCard from "../AnimeDetailsCard";
import EpisodeList from "../EpisodeList";
import ErrorMessage from "../ErrorMessage";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    fetchAnimeDetails(`${id}`)
      .then((data) => data)
      .then((data) => {
        setAnimeDetails(data);
      });
  }, [id]);

  const handleError = () => {
    if (animeDetails?.error) {
      return true;
    } else {
      return false;
    }
  };

  const handleStatus = () => {
    if (animeDetails?.status?.toLowerCase() === "upcoming") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      {handleError() ? (
        <div className="container error-page">
          <ErrorMessage />
        </div>
      ) : (
        <div className="container details-body">
          <AnimeDetailsCard
            animeDetails={animeDetails}
            handleStatus={handleStatus()}
          />
          <EpisodeList animeDetails={animeDetails} />
        </div>
      )}
    </React.Fragment>
  );
};

export default AnimeDetails;
