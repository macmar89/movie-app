import React from "react";
import suprised from "../../images/suprised.png";

const EmptyList = () => {
  return (
    <div className="mt-5 text-center">
      <img className="image-suprised mb-5" src={suprised} alt="suprised" />
      <h2>You don't have any favorite movie</h2>
    </div>
  );
};

export default EmptyList;
