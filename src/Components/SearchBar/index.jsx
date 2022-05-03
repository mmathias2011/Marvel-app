import React from "react";
import "./index.css";
import searchIcon from "../../assets/ic_busca.svg";
const SearchBar = () => {
  return (
    <>
      <div className="containerSearch">
        <div className="containerWrapper">
          <div className="containerIcon">
            <img src={searchIcon} alt="ícone de navegacao" />
          </div>
          <input
            className="containerSearchBar"
            placeholder="Procure por heróis"
            onChange={()=>{}}
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
