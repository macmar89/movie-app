import { useParams } from "react-router";
import { fetchOneMovie } from "../helpers/global/FetchMovieDetail";
import { useState, useEffect } from "react";

function MovieDetail({ match }) {
  const id = match.params.id;
  const [details, setDetails] = useState();

  useEffect(() => {
    fetchOneMovie(id, setDetails);
  }, [details]);
  return (
    <div>
      <h2>{details.Title}</h2>
    </div>
  );
}

export default MovieDetail;
