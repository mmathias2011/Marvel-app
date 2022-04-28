import React from 'react'

export default function index() {
  return (
    <div className="cardContainer">
        <img src={"propDaImg"} alt={"propDaDescricao"} className="cardImg" />
        <div className="cardInfo">
            <p className="heroName">{"hero.name"}</p>
            <p>favorito icon</p>
        </div>
    </div>
  )
}
