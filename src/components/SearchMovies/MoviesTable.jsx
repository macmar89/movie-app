import React from "react";
import { NavLink } from "react-router-dom";

const MoviesTable = ({ movies }) => {
  if (movies === "undefined") return <div></div>;

  if (movies !== "undefined")
    return (
      <table className="table table-hover table-striped my-5">
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
      </table>
    );
};

export default MoviesTable;
