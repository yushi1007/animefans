import React, { useState } from "react";

const Paginator = ({ pageNumber, id, currentPage, handlePageClick }) => {
  return (
    <li
      id={id}
      className={currentPage === pageNumber ? "active" : null}
      onClick={handlePageClick}
    >
      {pageNumber}
    </li>
  );
};

export default Paginator;
