import React from "react";
import FavoriteButton from "../FavoriteButton";
import "./index.css";
import iconComics from "../../assets/ic_quadrinhos.svg";
import iconTrailer from "../../assets/ic_trailer.svg";
import iconRatingOn from "../../assets/avaliacao_on.svg";
import iconRatingOff from "../../assets/avaliacao_off.svg";

const Details = ({
  id,
  name,
  img = {},
  description,
  onFavorite,
  isFavorited,
  modified,
  comics = {},
}) => {
  return (
    <>
      <div className="heroWrapper">
        <div className="detailsWrapper">
          <div className="rowNameFavorite">
            <h3 className=""> {name}</h3>

            <FavoriteButton
              isChecked={isFavorited}
              onClick={() => onFavorite({ name, id, isFavorited })}
            />
          </div>
          <div className="heroDescription">
            <p className=""> {description}</p>
          </div>
          <div className="heroDetails">
            <div className="heroRow">
              <div className="comics">
                <h3 className="">Quadrinhos</h3>
                <div className="comicDetails">
                  <img
                    className="comicIcon"
                    src={iconComics}
                    alt="Comic Icon"
                  />
                  <h2 className="">{comics.available}</h2>
                </div>
              </div>
              <div className="movie">
                <h3 className="">Filmes</h3>
                <div className="comicDetails">
                  <img className="" src={iconTrailer} alt="logo menor Marvel" />
                  <h2 className="">40</h2>
                </div>
              </div>
            </div>
            <div className="rating">
              <p>Rating:</p>
              <div className="icons">
                <img src={iconRatingOn} alt="rating icon" />
                <img src={iconRatingOn} alt="rating icon" />
                <img src={iconRatingOn} alt="rating icon" />
                <img src={iconRatingOn} alt="rating icon" />
                <img src={iconRatingOff} alt="rating icon" />
              </div>
            </div>
            <div className="comicDetails">
              <h3 className="">Último quadrinho:</h3>
              <div className="">{modified}</div>
            </div>
          </div>
        </div>
        <div className="colImg">
          <img
            className="heroImg"
            src={`${img.path}.${img.extension}`}
            alt={name}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
