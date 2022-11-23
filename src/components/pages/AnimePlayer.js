import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimePlayerCard from "../AnimePlayerCard";
import {
  fetchStreamingUrls,
  fetchAnimeDetails,
} from "../../data/fetchAnimeApi";
import Loader from "../Loader";
import EpisodeList from "../EpisodeList";

const AnimeVideo = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [animeDetails, setAnimeDetails] = useState(null);

  const animeId = id
    .replace(id.substring(id.indexOf("-episode") + 1), "")
    .slice(0, -1);

  useEffect(() => {
    fetchStreamingUrls(`vidcdn/watch/${id}`).then((data) =>
      setVideo(data.sources)
    );

    fetchAnimeDetails(animeId)
      .then((data) => data)
      .then((data) => {
        setAnimeDetails(data);
      });
  }, [id, animeId]);
  if(!video && !animeDetails) return <Loader />
  return (
    <div className="container body">
      <AnimePlayerCard video={video} animeDetails={animeDetails} />
      <EpisodeList animeDetails={animeDetails} />
    </div>
  );
};

export default AnimeVideo;
