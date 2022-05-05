import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton";
import "./index.css";
export default function Card({
  name,
  img,
  description,
  id,
  onFavorite,
  isFavorited,
  path,
  extension,
}) {
  return (
    <div className="cardContainer">
      <Link to={`/${id}`}>
        <img src={img} alt={description} className="cardImg" />
      </Link>
      <div className="cardInfo">
        <p className="heroName">{name}</p>
        <FavoriteButton
          isChecked={isFavorited}
          onClick={() =>
            onFavorite({
              name,
              id,
              isFavorited,
              description,
              thumbnail: { path, extension },
            })
          }
        />
      </div>
    </div>
  );
}
