import { useState, useEffect } from "react";
import axios from "axios";

//  components
import BasicInfo from "../layout/MovieDetail/BasicInfo";
import Button from "../global/components/Button";
import FavoriteStar from "../global/components/FavoriteStar";
import FavoriteStarFull from "../global/components/FavoriteStarFull";
import Loading from "../global/components/Loading";
import MoreInfo from "../layout/MovieDetail/MoreInfo";

//  helpers
import { timeConvert, shorten } from "../global/helpers/Format";
import { useLocalStorage } from "../global/helpers/useLocalStorage";

function MovieDetail({ match }) {
  const id = match.params.id;
  const [details, setDetails] = useState([]);
  const [favorite, setFavorite] = useLocalStorage("favorites", []);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moreDetails, setMoreDetails] = useState(false);

  const addRemoveFromFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      const newFavorites = [...favorite, details];
      setFavorite(newFavorites);
    }
    if (isFavorite) {
      const newFavorites = favorite.filter(movie => movie.imdbID !== id);
      setFavorite(newFavorites);
      // }
    }
  };
  //  skontroluje ci je film ulozeny v localStorage medzi oblubenymi
  const checkIfFavorite = () => {
    const movie = favorite.filter(movie => movie.imdbID === id);
    if (movie.length > 0) setIsFavorite(true);
  };

  const fetchMovieDetails = async id => {
    setIsLoading(true);
    await axios
      .get(`http://www.omdbapi.com/?apikey=48fdc589&i=${id}&plot=full`)
      .then(res => {
        setDetails(res.data);
        checkIfFavorite();
      })
      .catch(err => console.log(err));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <header className="row py-4 px-1 shadow-lg rounded">
        <main className="col-12 col-lg-8 d-flex flex-column ">
          <h2 className="text-uppercase text-center text-md-start">
            {shorten(details.Title, 35)}
          </h2>
          <div className="d-flex justify-content-center justify-content-md-start">
            <small>{details.Year}</small>&nbsp;&ndash;&nbsp;
            <small>{timeConvert(details.Runtime)}</small>
          </div>
        </main>
        <aside className="col-12 col-lg-4 d-flex flex-row-reverse justify-content-start justify-content-lg-center align-items-center">
          <div
            className=" mx-3 d-flex flex-column "
            style={{ cursor: "pointer" }}
          >
            {isFavorite ? (
              <FavoriteStarFull
                onClick={addRemoveFromFavorite}
                style={{ fontSize: "2rem", cursor: "pointer" }}
              />
            ) : (
              <FavoriteStar
                onClick={addRemoveFromFavorite}
                style={{ fontSize: "2rem", cursor: "pointer" }}
              />
            )}
          </div>
          <div className="my-2 mx-3 d-flex flex-column  ">
            <span>IMDb&nbsp;Rating </span>
            <strong className="px-2 py-1 mt-2 text-center border border-1 rounded-pill text-warning border-warning">
              {details.imdbRating === "N/A"
                ? "N/A"
                : `${details.imdbRating} / 10`}
            </strong>
          </div>
          <div className="my-2 mx-3 d-flex flex-column items-align-center">
            <span>Metascore </span>
            <strong className="px-2 py-1 mt-2 text-center border border-1 rounded-pill text-warning border-warning">
              {details.Metascore}
            </strong>
          </div>
        </aside>
      </header>
      <BasicInfo data={details} />
      <div className="text-center my-4">
        <Button
          className="btn-success"
          click={() => setMoreDetails(!moreDetails)}
          label={"More Info"}
        />
      </div>
      {moreDetails ? <MoreInfo data={details} /> : null}
    </div>
  );
}

export default MovieDetail;
