import React from "react";

const CardBack = ({ cvc }) => {
  return (
    <div className="card back">
      <span className="cvcValue">{cvc || "000"}</span>
    </div>
  );
};

export default CardBack;
