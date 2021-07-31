import { useState } from "react";
import Pagination from "../global/components/Pagination";
import MoviesTable from "../components/SearchMovies/MoviesTable";
import SearchForm from "../components/SearchMovies/SearchForm";
import Loading from "../global/components/Loading";

import axios from "axios";

const MovieSearch = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //  stiahne data z db
  const handleSubmit = async movie => {
    setIsLoading(true);
    setMovie(movie);
    await axios
      .get(
        `http://www.omdbapi.com/?apikey=48fdc589&s=${movie}&page=${currentPage}`
      )
      .then(res => {
        if (res.data.Response) {
          setMovies(res.data);
        }
        setIsLoading(false);
        console.log(res.data);
      })
      .catch(err => console.log(err));
    console.log(
      `http://www.omdbapi.com/?apikey=48fdc589&s=${movie}&page=${currentPage}`
    );
  };

  return (
    <div>
      <SearchForm setMovies={handleSubmit} />
      {!isLoading ? (
        <div>
          <MoviesTable movies={movies} />
          {movies && Math.ceil(movies.totalResults / 10) > 1 && (
            <Pagination
              fetchMovies={handleSubmit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              movie={movie}
              pageCount={Math.ceil(movies.totalResults / 10)}
            />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default MovieSearch;
