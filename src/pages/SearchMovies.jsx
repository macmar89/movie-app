import { useState } from "react";

import axios from "axios";

import Error from "../global/components/Error";
import Header from "../global/components/Header";
import Loading from "../global/components/Loading";
import MoviesTable from "../components/SearchMovies/MoviesTable";
import Pagination from "../global/components/Pagination";
import SearchForm from "../components/SearchMovies/SearchForm";

const MovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState();

  //  stiahne data z db
  const handleSubmit = async movie => {
    setError(false);
    setIsLoading(true);
    setMovie(movie);
    await axios
      .get(
        `http://www.omdbapi.com/?apikey=48fdc589&s=${movie}&page=${currentPage}`
      )
      .then(res => {
        console.log(res);
        console.log(res.data.Response);
        console.log(!res.data.Response);

        if (res.data.Response === "False") {
          console.log("tu nemam");

          setError(true);
          return;
        }
        console.log("uz som za mojou hladanou podmienkou");
        if (res.data.Response) {
          console.log(res.data.Response);
          setMovies(res.data);
        }
        console.log(res.data);
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
      {error ? <Error /> : null}
    </div>
  );
};
export default MovieSearch;
