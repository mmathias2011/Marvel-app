import React from "react";
import "./index.css";
import searchIcon from "../../assets/ic_busca.svg";
const SearchBar = ({ onSearch }) => {
  return (
    <>
      <div className="containerSearch">
        <div className="containerWrapper">
          <div className="containerIcon">
            <img src={searchIcon} alt="ícone de navegacao" />
          </div>
          <form onSubmit={onSearch}>
            <input
              id="query"
              className="containerSearchBar"
              placeholder="Procure por heróis"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
