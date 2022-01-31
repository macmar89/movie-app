import "./App.scss";
import { Switch, Route } from "react-router-dom";

//  pages
import FavoriteMovies from "./pages/FavoriteMovies";
import MovieDetail from "./pages/MovieDetail";
import SearchMovies from "./pages/SearchMovies";

//  components
import MainHeader from "./global/components/MainHeader";
import NavMenu from "./global/components/NavMenu";
import board from "./images/board-player.png";

function App() {
  return (
    <div className="App position-relative">
      <img className="image-board" src={board} alt={board} />
      <MainHeader title="Movie App" />
      <NavMenu />
      <main className="container mt-3 mt-md-5">
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
