import React, { useState, useRef } from "react";

const SearchForm = ({ setMovies }) => {
  const searchInput = useRef(null);
  const [movie, setMovie] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(searchInput.current?.value);
  };

  const handleInput = () => {
    // console.log(searchInput.current?.value);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="row">
        <div className="col-8">
          <input
            className="form-control"
            ref={searchInput}
            onChange={e => setMovie(e.target.value)}
            value={movie}
            type="text"
            placeholder="search for movie"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-dark btn-block" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
