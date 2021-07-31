import React from "react";
import { useLocalStorage } from "../global/helpers/useLocalStorage";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MovieCard from "../components/SearchMovies/MovieCard";
import Pagination from "../global/components/Pagination";

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useLocalStorage(
    "favorites",
    JSON.parse(localStorage.getItem("favorite"))
  );

  const remove = id => {
    const removeFavorite = window.confirm("Are you sure?");
    if (!removeFavorite) return;
    if (removeFavorite) {
      const newFavorites = favorites.filter(movie => movie.imdbID !== id);
      setFavorites(newFavorites);
    }
  };

  return (
    <div>
      <h2 className="my-2 text-center">Favorites Movies</h2>
      <div className="row">
        {favorites.map(movie => (
          <article className="col-6">
            <MovieCard data={movie} />
          </article>
        ))}
      </div>

      {favorites.length > 10 && <Pagination></Pagination>}
    </div>
  );
};

export default FavoriteMovies;
