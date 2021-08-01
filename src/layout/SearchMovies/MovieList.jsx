import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="row my-4">
      {movies &&
        movies.Search.map(movie => (
          <div className="col-12 col-md-6">
            <MovieCard data={movie} />
          </div>
        ))}
    </div>
  );
};

export default MovieList;
