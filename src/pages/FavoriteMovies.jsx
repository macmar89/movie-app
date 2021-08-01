import React, { useState } from "react";

//  components
import FavoriteStarFull from "../global/components/FavoriteStarFull";
import Header from "../global/components/Header";
import MovieCard from "../components/SearchMovies/MovieCard";
import Pagination from "../global/components/Pagination";

//  helpers
import { useLocalStorage } from "../global/helpers/useLocalStorage";

const FavoriteMovies = () => {
  // const localFavorites = JSON.parse(localStorage.getItem("favorite"));

  const [favorites, setFavorites] = useLocalStorage(
    "favorites",
    JSON.parse(localStorage.getItem("favorite")) !== null
      ? JSON.parse(localStorage.getItem("favorite"))
      : []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // if (localFavorites !== null) {
  //   setFavorites(localFavorites);
  // }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //  movie zobrazene na strane
  let currentMovies = favorites.slice(indexOfFirstPost, indexOfLastPost);

  //  nastavi movie, ktore sa zobrazia
  const handleSubmit = id => {
    console.log(id);
    currentMovies = id;
  };

  //  opyta sa a vymaze film z favorites v localStorage
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
      <Header title="Favorites Movies" />
      <div className="row">
        {currentMovies.map(movie => (
          <div key={movie.imdbID} className="col-12 col-md-6 position-relative">
            <MovieCard data={movie} />
            <aside>
              <FavoriteStarFull
                onClick={() => remove(movie.imdbID)}
                className="position-absolute"
                style={{
                  fontSize: "2rem",
                  zIndex: "50",
                  top: "2rem",
                  right: "3rem",
                  cursor: "pointer",
                }}
              />
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
