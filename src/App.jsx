import "./App.scss";
import { Switch, Route } from "react-router-dom";

//  pages
import FavoriteMovies from "./pages/FavoriteMovies";
import MovieDetail from "./pages/MovieDetail";
import SearchMovies from "./pages/SearchMovies";

//  components
import Header from "./components/global/Header";
import { MovieProvider } from "./global/helpers/MovieContext";

function App() {
  return (
    <div className="App">
      <Header title="Movie App" />
      <main className="container">
        <Switch>
          <Route path={"/"} exact component={SearchMovies} />
          <Route path={"/search"} exact component={SearchMovies} />
          <Route path={"/movie/:id"} component={MovieDetail} />
          <Route path={"/favorites"} component={FavoriteMovies}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
