import React from "react";
import "./index.css";
import ToggleButton from "../ToggleButtom";
import AscIcon from "../../assets/ic_heroi.svg";
import favoriteOn from "../../assets/fav_checked.svg";
import favoriteOff from "../../assets/fav_unchecked.svg";

const Filter = ({ charactersLength, isOnlyFavorites, onToggleFavorite, onToggleFilterAsc }) => {
  return (
    <>
      <div className="container-info">
        <div className="info-length">Encontrados {charactersLength} heróis</div>

        <div className="info-buttons">
          <div className="order-button">
            <img className="img-hero" src={AscIcon} alt="ícone de navegacao" />
            Ordenar por nome - A/Z
          </div>
          <ToggleButton handleClick={onToggleFilterAsc} />

          <div className="favorite-button">
            <button
              className="button-favorite"
              data-testid="toggle-favorite"
              onClick={() => onToggleFavorite(isOnlyFavorites)}
            >
              <img
                className="img-favorite"
                src={isOnlyFavorites ? favoriteOn : favoriteOff}
                alt="ícone de navegacao"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
