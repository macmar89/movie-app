import { BsStar } from "react-icons/bs";
import { Icon } from "../types/Icon";

const FavoriteStar = ({ className, onClick, style }: Icon) => {
  return (
    <BsStar
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Add/remove from favorites"
      className={`text-warning ${className}`}
      onClick={onClick}
      style={style}
    ></BsStar>
  );
};

export default FavoriteStar;
