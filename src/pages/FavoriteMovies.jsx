import React from "react";
import { useLocalStorage } from "../global/helpers/useLocalStorage";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

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

      <table className="table">
        <thead>
          <tr>
            <th className="ps-3" colSpan="4">
              Title
            </th>
            <th className="text-center" colSpan="1">
              More Info
            </th>
            <th className="text-center" colSpan="1">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {favorites.map(movie => (
            <tr>
              <th className="ps-3" colSpan="4">
                {movie.Title}
              </th>
              <td className="text-center" colSpan="1">
                <NavLink to={`/movie/${movie.imdbID}`}>
                  <BsInfoCircle style={{ color: "green", cursor: "pointer" }} />
                </NavLink>
              </td>
              <td className="text-center" colSpan="1">
                <IoIosRemoveCircleOutline
                  className=""
                  onClick={() => remove(movie.imdbID)}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteMovies;
