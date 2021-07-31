import { useState } from "react";
import Pagination from "../global/components/Pagination";
import MoviesTable from "../components/SearchMovies/MoviesTable";
import SearchForm from "../components/SearchMovies/SearchForm";

import { fetchMovies } from "../global/helpers/FetchMovies";

const MovieSearch = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //  stiahne data z db
  const handleSubmit = async movie => {
    setIsLoading(true);
    setMovie(movie);
    await fetchMovies(movie, setMovies, currentPage);
    setIsLoading(false);
  };

  if (isLoading) return <div>loading</div>;

  return (
    <div className="">
      <SearchForm setMovies={handleSubmit} />
      {movies && <MoviesTable movies={movies} />}
      {movies && (
        <Pagination
          fetchMovies={handleSubmit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          movie={movie}
          pageCount={Math.ceil(movies.totalResults / 10)}
        />
      )}
    </div>
  );
};
export default MovieSearch;
