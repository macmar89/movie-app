import Button from "../../global/components/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import { shorten } from "../../global/helpers/Format";
import popcorn from "../../images/popcorn.png";

const MovieCard = ({ data }) => {
  return (
    <div className="card mb-4 pt-3" style={{ opacity: "0.90" }}>
      <img
        onClick={() => console.log(data.Poster)}
        src={data.Poster !== "N/A" ? data.Poster : popcorn}
        alt={`${data.Poster} + poster`}
        className=""
        style={{ height: "18rem", objectFit: "scale-down", opacity: 1 }}
      />

      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="py-2 text-center" style={{ opacity: 1 }}>
          {shorten(data.Title, 50)}
        </h5>
        <div className="btn btn-outline-success">
          <NavLink className="" to={`/movie/${data.imdbID}`}>
            Show More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
