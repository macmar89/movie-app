import React from "react";
import { NavLink } from "react-router-dom";

//  helpers
import { shorten } from "../../global/helpers/Format";

//  image
import popcorn from "../../images/popcorn.png";

const MovieCard = ({ data }: { data: any }) => {
  console.log(data);
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
        <div className="d-flex justify-content-center">
          <NavLink
            className="bg-secondary px-5 py-2  rounded"
            to={`/movie/${data.imdbID}`}
          >
            <strong className="">Movie Details</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
