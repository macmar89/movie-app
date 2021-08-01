import "./App.scss";
import { Switch, Route } from "react-router-dom";

//  pages
import FavoriteMovies from "./pages/FavoriteMovies";
import MovieDetail from "./pages/MovieDetail";
import SearchMovies from "./pages/SearchMovies";

//  components
import MainHeader from "./components/global/MainHeader";
import NavMenu from "./components/global/NavMenu";
import board from "./images/board-player.png";

function App() {
  return (
    <div className="App position-relative">
      <img
        className="position-fixed"
        src={board}
        alt={board}
        style={{ top: "20%", right: "5%", zIndex: "-10", opacity: 0.05 }}
      />
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
