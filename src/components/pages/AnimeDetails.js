import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeDetails } from "../../data/fetchAnimeApi";
import AnimeDetailsCard from "../AnimeDetailsCard";

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

  return (
      <div className="container details-body">
        <AnimeDetailsCard animeDetails={animeDetails} />
      </div>
  ) 
};

export default AnimeDetails;
