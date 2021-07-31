import React, { useState } from "react";

const Pagination = ({
  fetchMovies,
  currentPage,
  setCurrentPage,
  pageCount,
  movie,
}) => {
  const [pageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  //  spravi mi pole cisel od 1 po pocet stranok
  const numberOfPages = [];
  for (let i = 1; i <= pageCount; i++) {
    numberOfPages.push(i);
  }

  //  posle do SearchMovies.jsx cislo ktorej stranky ma nacitat
  const handleClick = async num => {
    // setCurrentPage(e.target.id);

    setCurrentPage(num);
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
    await fetchMovies(movie);
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

  const firstPageClick = () => {
    setCurrentPage(1);
    setMinPageNumberLimit(0);
    setMaxPageNumberLimit(pageNumberLimit);
  };

  const lastPageClick = () => {
    setCurrentPage(pageCount);
    const max = Math.ceil(pageCount / pageNumberLimit) * pageNumberLimit;
    setMaxPageNumberLimit(max);
    setMinPageNumberLimit(max - pageNumberLimit - 1);
  };

  return (
    <div className="d-flex justify-content-end">
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
