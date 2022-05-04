import React from "react";
import "./index.css";
import ToggleButton from "../ToggleButtom";
import AscIcon from "../../assets/ic_heroi.svg";
import navigateIcon from "../../assets/ic_heroi.svg";
import favoriteOn from "../../assets/fav_checked.svg";
import favoriteOff from "../../assets/fav_unchecked.svg";

const Filter = ({ charactersLength }) => {
  return (
    <>
      <div className="container-info">
        <div className="info-length">Encontrados {charactersLength} heróis</div>

        <div className="info-buttons">
          <div className="order-button">
            <img className="img-hero" src={AscIcon} alt="ícone de navegacao" />
            Ordenar por nome - A/Z
          </div>
          <ToggleButton />

          <div className="favorite-button">
            <button
              className="button-favorite"
              data-testid="toggle-favorite"
              onClick={()=>{}}
            >
              <img
                className="img-favorite"
                src={favoriteOff}
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
