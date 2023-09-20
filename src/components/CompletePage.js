import React from "react";
import completeIcon from "../interactive-card-details-form-main/images/icon-complete.svg";

const CompletePage = ({ setFormData, setValidSubmit }) => {
  function handleContinue() {
    //reset formData state
    setFormData((prevData) => {
      const newData = {};
      for (let key in prevData) {
        newData[key] = "";
      }
      return newData;
    });

    //Go back to form
    setValidSubmit(false);
  }

  return (
    <div className="complete-section">
      <img alt="check" src={completeIcon} />
      <h1>Thank You!</h1>
      <p>We've added your card details</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default CompletePage;
