import React from "react";
import sorry from "../../images/sorry.png";

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center error">
      <img className="image-sorry" src={sorry} alt="sorry" />
      <h3>Movie not found</h3>
    </div>
  );
};

export default Error;
