import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "../SearchMovies/SearchForm";

const NavMenu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container">
        <NavLink class="navbar-brand" to="/">
          Menu
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                class="nav-link text-light"
                aria-current="page"
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link text-light" aria-current="page" to="/">
                Link
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link text-light"
                aria-current="page"
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
