import React from "react";
import { ReactComponent as FavIconChecked } from "../../assets/fav_checked.svg";
import {ReactComponent as FavIconUnChecked} from "../../assets/fav_unchecked.svg";
import './index.css'

export default function index({ onClick, isChecked }) {
  return <button className="favBtn" onClick={onClick}>{isChecked ? <FavIconChecked /> : <FavIconUnChecked />}</button>;
}
