import React from "react";
import FavoriteButton from "../FavoriteButton";
import './index.css';
const Details = ({ id, name, img, description, onFavorite, isFavorited }) => {
  return (
    <>
      <div className="container-detail">
        <div className="container-resume-hero">
          <div className="container-title">
            <h3 className="hero-name-detail"> {name}</h3>
            <FavoriteButton
              isChecked={isFavorited}
              onClick={() => onFavorite({ name, id, isFavorited })}
            />
          </div>
          <p className="hero-resume"> {description}</p>

          <div className="cantainer-hero-detail">
            <div className="">
              <h3 className="hero-detail">Quadrinhos</h3>
              <div className="icon-value">
                <img
                  className="detail-icon"
                  src="/ic_quadrinhos.svg"
                  alt="logo menor Marvel"
                />
                <h2 className="value">aaa</h2>
              </div>
            </div>
            <div className="">
              <h3 className="hero-detail">Filmes</h3>
              <div className="icon-value">
                <img
                  className="detail-icon-movie"
                  src="/ic_trailer.svg"
                  alt="logo menor Marvel"
                />
                <h2 className="value">aa</h2>
              </div>
            </div>
          </div>
          <div className="container-rating">raiting</div>
          <div className="container-last-publication">
            <h3 className="hero-detail">Último quadrinho:</h3>
            <div className="last-publication">last pub</div>
          </div>
        </div>
        <div>
          <img className="hero-img" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Details;
