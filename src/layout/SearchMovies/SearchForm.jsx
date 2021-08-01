import React, { useState } from "react";

//  components
import Button from "../../global/components/Button";

const SearchForm = ({ fetch }) => {
  const [movie, setMovie] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch(movie, 1);
    setMovie("");
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-12 col-md-8 ">
        <input
          className="form-control"
          onChange={e => setMovie(e.target.value)}
          value={movie}
          type="text"
          placeholder="search for movie"
          autoFocus
        />
      </div>
      <div className="col-12 col-md-4 mx-auto mt-2 mt-md-0 ">
        <Button label={"Search"} className="btn-success btn-block col-12" />
      </div>
    </form>
  );
};

export default SearchForm;
