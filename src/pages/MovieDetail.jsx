import { useParams } from "react-router";
import { fetchOneMovie } from "../helpers/global/FetchMovieDetail";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MovieDetail({ match }) {
  const id = match.params.id;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchOneMovie(id, setDetails);
  }, [details]);

  return (
    <div>
      <button onClick={() => console.log(details)} className="btn btn-success">
        show
      </button>
      <h2>{details.Title}</h2>
      <img src={details.Poster} alt="" />
      <NavLink to="/">
        <button className="btn btn-outline-success ">go home</button>
      </NavLink>
    </div>
  );
}

export default MovieDetail;
