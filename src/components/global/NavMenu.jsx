import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <Navbar className="navbar sticky-top" bg="secondary" expand="md">
      <div className="container">
        <Navbar.Brand className="text-secodary">
          <span>Movie app</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="/">Search</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/favorites">Favorites</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavMenu;
