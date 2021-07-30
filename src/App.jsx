import "./App.css";
import { Switch, Route } from "react-router-dom";

//  pages
import FavoriteMovies from "./pages/FavoriteMovies";
import MovieDetail from "./pages/MovieDetail";
import SearchMovies from "./pages/SearchMovies";
import { NavLink } from "react-bootstrap";

function App() {
  return (
    <div className="App container my-5">
      <h1>Movie App</h1>
      <Switch>
        <Route path={"/"} exact component={SearchMovies} />
        <Route path={"/search"} exact component={SearchMovies} />
        <Route path={"/movie/:id"} component={MovieDetail} />
        <Route path={"/favorites"} component={FavoriteMovies}></Route>
      </Switch>
    </div>
  );
}

export default App;
