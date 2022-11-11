import React from "react";
import HomeSection from "./HomeSection";
import Popular from "./Popular";
import TopAiring from "./TopAiring";
import RecentRelease from "./RecentRelease";

const AnimeSection = () => {
  return (
    <React.Fragment>
      <HomeSection />
      <RecentRelease />
      <TopAiring />
      <Popular />
    </React.Fragment>
  );
};

export default AnimeSection;
