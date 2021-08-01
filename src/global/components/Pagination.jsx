import React, { useState } from "react";

const Pagination = props => {
  const { fetchMovies, currentPage, setCurrentPage, pageCount, movie } = props;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  //  spravi mi pole cisel od 1 po pocet stranok
  const numberOfPages = [];
  for (let i = 1; i <= pageCount; i++) {
    numberOfPages.push(i);
  }

  //  posle do SearchMovies.jsx cislo ktorej stranky ma nacitat
  const handleClick = num => {
    setCurrentPage(num);
    console.log(`num jeeee ${num}`);
    setMinPageNumberLimit(num - 3);
    setMaxPageNumberLimit(num + 2);
    if (num === 1 || num === 2) {
      setMinPageNumberLimit(0);
      setMaxPageNumberLimit(5);
    }
    if (num === pageCount || num === pageCount - 1) {
      setMinPageNumberLimit(pageCount - 5);
      setMaxPageNumberLimit(pageCount);
    }
    console.log(movie, num);
    fetchMovies(movie, num);
  };

  const renderPageNumbers = numberOfPages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={() => handleClick(number)}
          className={`page-item ${currentPage === number ? "active" : ""}`}
        >
          <span className="page-link">{number}</span>
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="d-flex mb-4 justify-content-center justify-content-lg-end">
      <nav className="pagination">
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => {
            if (currentPage > 1) handleClick(currentPage - 1);
          }}
        >
          <span className="page-link">Previous</span>
        </li>
        {renderPageNumbers}
        <li
          className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}
          onClick={() => {
            if (currentPage < pageCount) handleClick(currentPage + 1);
          }}
        >
          <span className="page-link">Next</span>
        </li>
      </nav>
    </div>
  );
};

export default Pagination;
