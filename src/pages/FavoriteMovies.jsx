import React from "react";
import { useLocalStorage } from "../global/helpers/useLocalStorage";

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
      {favorites.map(movie => (
        <div className="d-flex">
          <p>{movie.Title}</p>
          <span onClick={() => remove(movie.imdbID)} className="ms-3">
            remove from Favorites
          </span>
        </div>
      ))}
    </div>
  );
};

export default FavoriteMovies;
