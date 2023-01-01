import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnimeLists from "../components/AnimeLists";
import { fetchRecentRelease } from "../data/fetchAnimeApi";
import Paginator from "../components/Paginator";

const RecentRelease = () => {
  const location = useLocation();
  const [recentRelease, setRecentRelease] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const type1TotalPages = 331;

  useEffect(() => {
    setIsLoading(true);
    setRecentRelease([]);
    fetchRecentRelease(type, currentPage).then((data) => {
      setRecentRelease(data);
      if (recentRelease) {
        setIsLoading(false);
      }
    });
  }, [type, currentPage]);

  return (
    <div className="container">
      <div className="lists-box recent-release-box">
        <h1>Recent Released</h1>
        <AnimeLists animeLists={recentRelease} isLoading={isLoading} />
      </div>
      {location.pathname === "/recentrelease" && (
        <div className="paginator">
          <Paginator
            totalPages={type1TotalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default RecentRelease;
