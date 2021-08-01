import { useState, useEffect } from "react";

//  components
import BasicInfo from "../components/MovieDetail/BasicInfo";
import Button from "../global/components/Button";
import FavoriteStar from "../global/components/FavoriteStar";
import FavoriteStarFull from "../global/components/FavoriteStarFull";
import Loading from "../global/components/Loading";
import MoreInfo from "../components/MovieDetail/MoreInfo";

//  helpers
import { fetchOneMovie } from "../global/helpers/FetchMovieDetail";
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

  useEffect(() => {
    setIsLoading(true);
    fetchOneMovie(id, setDetails);
    checkIfFavorite();
    setIsLoading(false);
  }, [id, isFavorite]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <header className="row py-4 px-1 shadow-lg rounded">
        <main className="col-12 col-md-8 d-flex flex-column ">
          <h2 className="text-uppercase text-center text-md-start color">
            {shorten(details.Title, 40)}
          </h2>
          <div className="d-flex justify-content-center justify-content-md-start">
            <span>{details.Year}</span>&nbsp;&ndash;&nbsp;
            <span>{timeConvert(details.Runtime)}</span>
          </div>
        </main>
        <aside className="col-12 col-md-4 d-flex flex-row-reverse justify-content-center align-items-center">
          <div
            className=" mx-3 d-flex flex-column "
            style={{ cursor: "pointer" }}
          >
            {isFavorite ? (
              <FavoriteStarFull
                onClick={addRemoveFromFavorite}
                style={{ color: "yellow", fontSize: 40 }}
              />
            ) : (
              <FavoriteStar
                onClick={addRemoveFromFavorite}
                style={{ color: "yellow", fontSize: 40 }}
              />
            )}
          </div>
          <div className="my-2 mx-3 d-flex flex-column ">
            <span>IMDb Rating </span>
            <span className="px-2 py-1 mt-2 text-center border border-1 rounded-pill">
              {details.imdbRating === "N/A"
                ? "N/A"
                : `${details.imdbRating} / 10`}
            </span>
          </div>
          <div className="my-2 mx-3 d-flex flex-column items-align-center">
            <span>Metascore </span>
            <span className="px-2 py-1 mt-2 text-center border border-1 rounded-pill">
              {details.Metascore}
            </span>
          </div>
        </aside>
      </header>
      <BasicInfo data={details} />
      <div className="text-center my-4">
        <Button
          className="btn-success"
          click={() => setMoreDetails(!moreDetails)}
          label={"Show More Details"}
        />
      </div>
      {moreDetails ? <MoreInfo data={details} /> : null}
    </div>
  );
}

export default MovieDetail;
