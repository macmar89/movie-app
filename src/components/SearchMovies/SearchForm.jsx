import React, { useState, useRef } from "react";

//  components
import Button from "../../global/components/Button";

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
      <Button
        label={"Search"}
        className="col-11 col-md-4 mx-auto mt-2 mt-md-0 btn-outline-success"
      />
    </form>
  );
};

export default SearchForm;
