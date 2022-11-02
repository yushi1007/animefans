import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeDetails } from "../../data/fetchAnimeApi";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);

  // const animeTitle = id.replace(id.substring(id.indexOf('-episode') + 1),"").slice(0, -1);

  useEffect(() => {
    fetchAnimeDetails(`${id}`)
      .then((data) => data)
      .then((data) => {
        console.log(data)
        setAnimeDetails(data);
      });

  }, [id]);

  return (
      <div>AnimeDetails</div>
  ) 
};

export default AnimeDetails;
