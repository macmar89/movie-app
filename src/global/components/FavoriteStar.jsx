import React from "react";
import { BsStar } from "react-icons/bs";

const FavoriteStar = props => {
  const { className, onClick, style } = props;

  return (
    <BsStar
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Add/remove from favorites"
      className={className}
      onClick={onClick}
      style={style}
    ></BsStar>
  );
};

export default FavoriteStar;
