import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SearchForm from "../SearchMovies/SearchForm";

const NavMenu = () => {
  return (
    <Navbar className="navbar sticky-top" bg="primary" expand="md">
      <div className="container">
        <Navbar.Brand to="/">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">
              Search
            </NavLink>
            <NavLink className="nav-link" to="/favorites" exact>
              Favorites
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavMenu;
