import React, { useState } from "react";
import { useLocalStorage } from "../global/helpers/useLocalStorage";

//  components
import FavoriteStarFull from "../global/components/FavoriteStarFull";
import MovieCard from "../components/SearchMovies/MovieCard";
import Pagination from "../global/components/Pagination";

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useLocalStorage(
    "favorites",
    JSON.parse(localStorage.getItem("favorite"))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //
  let currentMovies = favorites.slice(indexOfFirstPost, indexOfLastPost);

  const handleSubmit = id => {
    currentMovies = id;
  };

  const remove = id => {
    const removeFavorite = window.confirm(
      "Remove from favorites. Are you sure?"
    );
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
        {currentMovies.map(movie => (
          <div className="col-12 col-md-6 position-relative">
            <MovieCard data={movie} />
            <aside>
              <FavoriteStarFull
                onClick={() => remove(movie.imdbID)}
                className="position-absolute"
                style={{
                  fontSize: "2rem",
                  color: "yellow",
                  zIndex: "50",
                  top: "2rem",
                  right: "3rem",
                }}
              />
              {/* <BsStarFill
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Add/remove from favorites"
                onClick={() => remove(movie.imdbID)}
                className="position-absolute"
                style={{
                  fontSize: "2rem",
                  color: "yellow",
                  zIndex: "50",
                  top: "2rem",
                  right: "3rem",
                }}
              /> */}
            </aside>
          </div>
        ))}
      </div>

      {favorites.length > 10 && (
        <Pagination
          fetchMovies={handleSubmit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          movie={currentMovies}
          pageCount={Math.ceil(favorites.length / 10)}
        />
      )}
    </div>
  );
};

export default FavoriteMovies;
