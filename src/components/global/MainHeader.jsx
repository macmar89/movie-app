import React from "react";
import popcorn from "../../images/popcorn.png";
import film from "../../images/film-frame.png";

const MainHeader = ({ title }) => {
  return (
    <div className="header text-center">
      <div className="d-none d-md-flex container position-relative justify-content-center align-items-center my-5 ">
        <h1>{title}</h1>
        <img
          className="position-absolute rounded"
          style={{ right: 50 }}
          src={popcorn}
          alt="popcorn"
        />
      </div>
    </div>
  );
};

export default MainHeader;
