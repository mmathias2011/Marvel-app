import React from "react";
import "./index.css";
import toggleOn from "../../assets/toggle_on.svg";
import toggleOff from "../../assets/toggle_off.svg";
const ToggleButton = ({ handleClick }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <img
        role="presentation"
        data-testid="toggle-asc"
        onClick={() => {
          handleClick(!isActive);
          setIsActive(!isActive)
        }}
        className="imgToggle"
        src={isActive ? toggleOn : toggleOff}
        alt="ícone de seleção"
      />
    </>
  );
};

export default ToggleButton;
