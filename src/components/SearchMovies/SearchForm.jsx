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
    <form onSubmit={handleSubmit} className="row ">
      <div className="col-12 col-md-8">
        <input
          className="form-control"
          ref={searchInput}
          onChange={e => setMovie(e.target.value)}
          value={movie}
          type="text"
          placeholder="search for movie"
        />
      </div>
      <button
        className="d-none d-md-block col-md-4 mt-md-0 btn btn-outline-success btn-block"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
