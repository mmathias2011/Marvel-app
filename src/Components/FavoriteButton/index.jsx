import React from "react";
import { ReactComponent as FavIconChecked } from "../../assets/fav_checked.svg";
import {ReactComponent as FavIconUnChecked} from "../../assets/fav_unchecked.svg";

export default function index({ onClick, isChecked }) {
  return <button onClick={onClick}>{isChecked ? <FavIconChecked /> : <FavIconUnChecked />}</button>;
}
