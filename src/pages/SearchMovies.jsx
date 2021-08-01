import { useState } from "react";

import axios from "axios";

//  components
import Error from "../global/components/Error";
import Header from "../global/components/Header";
import Loading from "../global/components/Loading";
import MovieList from "../layout/SearchMovies/MovieList";
import Pagination from "../global/components/Pagination";
import SearchForm from "../layout/SearchMovies/SearchForm";

const MovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState();

  //  stiahne data z db
  const fetchMovies = async (movie, page) => {
    setError(false);
    setIsLoading(true);
    setMovie(movie);
    await axios
      .get(`http://www.omdbapi.com/?apikey=48fdc589&s=${movie}&page=${page}`)
      .then(res => {
        if (res.data.Response === "False") {
          setError(true);
          return;
        }
        if (res.data.Response) {
          setMovies(res.data);
        }
        setCurrentPage(page);
      })
      .catch(err => console.log(err));
    console.log(
      `http://www.omdbapi.com/?apikey=48fdc589&s=${movie}&page=${currentPage}`
    );
    setIsLoading(false);
  };

  return (
    <div className>
      <Header title="Search" />
      <SearchForm fetch={fetchMovies} />
      {!isLoading ? (
        <div>
          <MovieList movies={movies} />
          {movies && Math.ceil(movies.totalResults / 10) > 1 && (
            <Pagination
              fetchMovies={fetchMovies}
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
      {error ? <Error /> : null}
    </div>
  );
};
export default MovieSearch;
