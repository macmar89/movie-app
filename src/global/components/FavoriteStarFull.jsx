import React from "react";
import { BsStarFill } from "react-icons/bs";

const FavoriteStarFull = props => {
  const { className, onClick, style } = props;

  return (
    <BsStarFill
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Add/remove from favorites"
      className={className}
      onClick={onClick}
      style={style}
    ></BsStarFill>
  );
};

export default FavoriteStarFull;
