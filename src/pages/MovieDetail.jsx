import { fetchOneMovie } from "../global/helpers/FetchMovieDetail";
import { useState, useEffect } from "react";

//  helpers
import { timeConvert, shorten } from "../global/helpers/Format";
import { useLocalStorage } from "../global/helpers/useLocalStorage";

//  components
import Button from "../global/components/Button";
import FavoriteStar from "../global/components/FavoriteStar";
import FavoriteStarFull from "../global/components/FavoriteStarFull";

function MovieDetail({ match }) {
  const id = match.params.id;
  const [details, setDetails] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorite, setFavorite] = useLocalStorage("favorites", []);

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

  if (isLoading) return <div>Is loading...</div>;

  return (
    <div>
      <header className="row py-4 px-1 shadow-lg rounded">
        <main className="col-12 col-md-8 d-flex flex-column ">
          <h2 className="text-uppercase text-center text-md-start">
            {shorten(details.Title)}
          </h2>
          <div className="d-flex justify-content-center justify-content-md-start">
            <span>{details.Released}</span>&nbsp;&ndash;&nbsp;
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
      <div className="row  py-4 px-1">
        <div className="col-12 col-md-8">
          <table className="table ">
            <tbody>
              <tr>
                <td>Title</td>
                <th>{details.Title}</th>
              </tr>
              <tr>
                <td>Genre</td>
                <th>{details.Genre}</th>
              </tr>
              <tr>
                <td>Country</td>
                <th>{details.Country}</th>
              </tr>
              <tr>
                <td>Director</td>
                <th>{details.Director}</th>
              </tr>
              <tr>
                <td>Writer</td>
                <th>{details.Writer}</th>
              </tr>
              <tr>
                <td>Actors</td>
                <th>{details.Actors}</th>
              </tr>
            </tbody>
          </table>
          <p className="px-3 py-1 overflow-auto">{details.Plot}</p>
        </div>
        <div className="col-12 order-first order-md-last col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
          <img src={details.Poster} alt={`${details.Poster} poster`} />
        </div>
      </div>
      <div className="text-center my-4">
        <Button
          label={"Show More Details"}
          click={() => console.log(details)}
        />
      </div>
    </div>
  );
}

export default MovieDetail;
