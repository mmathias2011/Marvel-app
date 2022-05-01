import React from 'react'
import FavoriteButton from '../FavoriteButton'
export default function Card({name, img, description, id, onFavorite, isFavorited }) {
  return (
    <div className="cardContainer">
        <img src={img} alt={description} className="cardImg" />
        <div className="cardInfo">
            <p className="heroName">{name}</p>
            <FavoriteButton isChecked={isFavorited} onClick={()=> onFavorite({name, id, isFavorited})}/>
            
        </div>
    </div>
  )
}
