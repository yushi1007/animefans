import React from "react";
import EpisodeCard from "./EpisodeCard";

const AnimePlayerDetails = ({ animeDetails }) => {
  const sortEpisodes = animeDetails?.episodesList?.sort(
    (a, b) => a.episodeNum - b.episodeNum
  );

  const episodeItems = sortEpisodes?.map((episode) => {
    console.log(episode);
    return <EpisodeCard key={episode?.episodeId} episode={episode} />;
  });

  return (
    <div className="lists-box">
      <h1>Episodes</h1>
      <div className="episodes-box">{episodeItems}</div>
    </div>
  );
};

export default AnimePlayerDetails;
