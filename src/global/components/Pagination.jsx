import React, { useState } from "react";

const Pagination = props => {
  const { fetchMovies, currentPage, setCurrentPage, pageCount, movie } = props;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [isTruth, setIsTruth] = useState(true);

  //  spravi mi pole cisel od 1 po pocet stranok
  const numberOfPages = [];
  for (let i = 1; i <= pageCount; i++) {
    numberOfPages.push(i);
  }

  //  posle do SearchMovies.jsx cislo ktorej stranky ma nacitat
  const handleClick = e => {
    const num = Number(e.target.innerText);
    // setMinPageNumberLimit(num - 3);
    // setMaxPageNumberLimit(num + 2);

    // console.log(typeof num);
    // console.log(`cislo ${num} je mensie alebo rovne ako 2?  ${num <= 2}`);

    if (num <= 2) {
      setMinPageNumberLimit(0);
      setMaxPageNumberLimit(5);
    }
    if (num === pageCount || num === pageCount - 1) {
      setMinPageNumberLimit(pageCount - 5);
      setMaxPageNumberLimit(pageCount);
    }
    if (num > pageCount - 2) {
      setMinPageNumberLimit(pageCount - 5);
      setMaxPageNumberLimit(pageCount);
    }
    setCurrentPage(num);
    fetchMovies(movie, num);
  };

  const renderPageNumbers = numberOfPages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`page-item cursor-pointer ${
            currentPage === number ? "active" : ""
          }`}
        >
          <span className="page-link ">{number}</span>
        </li>
      );
    } else {
      return null;
    }
  });

  //  funkcia, ktora po kliknuti prehodi na predchadzajucu stranku
  const handlePrevbtn = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    //  opravit pri currentPage 1 vymaze 3 stranku
    if (currentPage <= pageCount - 2) {
      setMinPageNumberLimit(currentPage - 2);
      setMaxPageNumberLimit(currentPage + 3);
    }

    console.log(currentPage <= pageCount - 2);
    console.log(currentPage > 3);
    if (currentPage <= pageCount - 2 && currentPage > 3) {
      setMinPageNumberLimit(currentPage - 4);
      setMaxPageNumberLimit(currentPage + 1);
    }
    if (currentPage - 1 < 3) {
      setMinPageNumberLimit(0);
      setMaxPageNumberLimit(5);
    }
    fetchMovies(movie, currentPage - 1);
  };

  //  funkcia, ktora po kliknuti prehodi na dalsiu stranku
  const handleNextbtn = () => {
    if (currentPage === pageCount) return;

    fetchMovies(movie, currentPage + 1);
    setCurrentPage(currentPage + 1);

    if (currentPage < 3) {
      setMinPageNumberLimit(0);
      setMaxPageNumberLimit(5);
    }
    if (currentPage >= 3 && currentPage < pageCount - 2) {
      setMinPageNumberLimit(currentPage - 2);
      setMaxPageNumberLimit(currentPage + 3);
      setIsTruth(!isTruth);
    }

    if (currentPage + 1 === pageCount || currentPage + 1 >= pageCount - 1) {
      setMinPageNumberLimit(pageCount - 5);
      setMaxPageNumberLimit(pageCount);
    }

    setMaxPageNumberLimit(10);
  };

  return (
    <div className="d-flex mb-4 justify-content-center justify-content-lg-end">
      {currentPage} / {pageCount}
      <nav className="pagination ">
        <li
          className={`page-item cursor-pointer  ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={handlePrevbtn}
        >
          <span className="page-link ">Previous</span>
        </li>
        {renderPageNumbers}
        <li
          className={`page-item cursor-pointer ${
            currentPage === pageCount ? "disabled" : ""
          }`}
          onClick={handleNextbtn}
        >
          <span className="page-link ">Next</span>
        </li>
      </nav>
      <button
        onClick={() => {
          setMinPageNumberLimit(5);
          setMaxPageNumberLimit(10);
        }}
      >
        tuk
      </button>
      {isTruth === false ? <p>false</p> : <p>true</p>}
      <div>
        {minPageNumberLimit} {maxPageNumberLimit}
      </div>
    </div>
  );
};

export default Pagination;
