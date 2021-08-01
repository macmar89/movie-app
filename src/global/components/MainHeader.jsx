import React from "react";
import popcorn from "../../images/popcorn.png";

const MainHeader = ({ title }) => {
  return (
    <div className="header text-center mb-">
      <div className="d-none d-md-flex container position-relative justify-content-center align-items-center my-5 ">
        <h1>{title}</h1>
        <img
          className="position-absolute "
          style={{ left: 50 }}
          src={popcorn}
          alt="popcorn"
        />
        <img
          className="position-absolute "
          style={{ right: 50 }}
          src={popcorn}
          alt="popcorn"
        />
      </div>
    </div>
  );
};

export default MainHeader;