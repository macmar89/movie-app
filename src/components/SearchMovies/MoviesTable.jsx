import React from "react";
import MovieCard from "./MovieCard";

const MoviesTable = ({ movies }) => {
  return (
    <div className="row my-4">
      {movies &&
        movies.Search.map(movie => (
          <div className="col-12 col-md-6">
            <MovieCard data={movie} />
          </div>
        ))}

      {/* <table className="table table-hover table-striped my-5">
        <thead>
          <tr>
            <td>Title</td>
            <td>Year</td>
            <td>Poster</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {movies.Search.map(movie => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>
                <NavLink to={`/movie/${movie.imdbID}`}>info</NavLink>
              </td>
              <td>{movie.Type}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default MoviesTable;
