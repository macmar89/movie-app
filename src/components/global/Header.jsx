import React from "react";
import NavMenu from "./NavMenu";
import popcorn from "../../images/popcorn.png";

const Header = ({ title }) => {
  return (
    <div className="header text-center mb-3 mb-md-4">
      <div className="d-none d-md-flex container position-relative justify-content-center align-items-center my-5 ">
        <h1>{title}</h1>
        <img
          className="position-absolute rounded"
          style={{ right: 50 }}
          src={popcorn}
          alt="popcorn"
        />
      </div>

      <NavMenu />
    </div>
  );
};

export default Header;
