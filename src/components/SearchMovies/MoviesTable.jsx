import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";
import Pagination from "../../global/components/Pagination";

const MoviesTable = ({ movies }) => {
  return (
    <div className="row my-4">
      {movies &&
        movies.Search.map(movie => (
          <arcicle className="col-12 col-md-3">
            <MovieCard data={movie} />
          </arcicle>
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
