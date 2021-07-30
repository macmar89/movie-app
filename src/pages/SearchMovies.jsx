import { useState } from "react";
import MoviesTable from "../components/SearchMovies/MoviesTable";
import SearchForm from "../components/SearchMovies/SearchForm";

import { fetchMovies } from "../helpers/global/FetchMovies";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isMovies, setIsMovies] = useState(false);

  //  stiahne data z db
  const handleSubmit = async movie => {
    await fetchMovies(movie, setMovies);
    setIsMovies(true);
  };

  return (
    <div className="">
      <SearchForm setMovies={handleSubmit} />
      {isMovies === true && <MoviesTable movies={movies} />}
    </div>
  );
};
export default MovieSearch;
