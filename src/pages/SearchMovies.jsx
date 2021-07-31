import { useState } from "react";
import Pagination from "../global/components/Pagination";
import MoviesTable from "../components/SearchMovies/MoviesTable";
import SearchForm from "../components/SearchMovies/SearchForm";

import { fetchMovies } from "../global/helpers/FetchMovies";

const MovieSearch = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [isMovies, setIsMovies] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //  stiahne data z db
  const handleSubmit = async movie => {
    setMovie(movie);
    await fetchMovies(movie, setMovies, currentPage);
    setIsMovies(true);
  };

  return (
    <div className="">
      <SearchForm setMovies={handleSubmit} />
      {isMovies === true && (
        <div>
          <MoviesTable movies={movies} />
          <Pagination
            fetchMovies={handleSubmit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            movie={movie}
            pageCount={Math.ceil(movies.totalResults / 10)}
          />
        </div>
      )}
      {currentPage}
    </div>
  );
};
export default MovieSearch;
