import React from "react";

const FavoriteMovies = () => {
  const favorites = JSON.parse(localStorage.getItem("favorite"));
  return (
    <div>
      {favorites.map(movie => (
        <p>{movie.Title}</p>
      ))}
    </div>
  );
};

export default FavoriteMovies;
