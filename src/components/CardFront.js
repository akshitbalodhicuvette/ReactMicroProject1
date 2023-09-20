import React from "react";
import logoImage from "../interactive-card-details-form-main/images/card-logo.svg";

function addSpaces(str) {
  return str
    .split(/(\w{4})/)
    .join(" ")
    .trim();
}

const CardFront = ({ name, number, month, year }) => {
  return (
    <div className="card front">
      <img alt="logo" src={logoImage}></img>
      <div className="card-number-value">
        {addSpaces(number) || "0000 0000 0000 0000"}
      </div>
      <div className="card-data">
        <p>{name || "Jane Appleseed"}</p>
        <p>
          {month || "00"}/{year || "00"}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
