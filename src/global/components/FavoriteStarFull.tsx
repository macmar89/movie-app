import { BsStarFill } from "react-icons/bs";
import { Icon } from "../types/Icon";

const FavoriteStarFull = ({ className, onClick, style }: Icon) => {
  return (
    <BsStarFill
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Add/remove from favorites"
      className={`text-warning ${className}`}
      onClick={onClick}
      style={style}
    ></BsStarFill>
  );
};

export default FavoriteStarFull;
