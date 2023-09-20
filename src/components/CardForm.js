import React from "react";
import { useState } from "react";

const CardForm = ({
  setFormData,
  name,
  number,
  year,
  month,
  cvc,
  setValidSubmit,
}) => {
  const [errors, setErrors] = useState({
    nameError: null,
    numberError: null,
    monthError: null,
    yearError: null,
    cvcError: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check name
    if (name === "" || !name) {
      setErrors((prev) => ({ ...prev, nameError: "Name is required" }));
    } else {
      setErrors((prev) => ({ ...prev, nameError: null }));
    }

    //check number
    if (number === "" || !number) {
      setErrors((prev) => ({ ...prev, numberError: "Card number required" }));
    } else if (!/^\d{16}$/.test(number)) {
      setErrors((prev) => ({
        ...prev,
        numberError: "Enter a valid number",
      }));
    } else {
      setErrors((prev) => ({ ...prev, numberError: null }));
    }

    //check month
    if (month === "" || !number) {
      setErrors((prev) => ({ ...prev, monthError: "Month is required" }));
    } else if (!/^(0[1-9]|1[0-2])$/.test(month)) {
      setErrors((prev) => ({
        ...prev,
        monthError: "Enter valid month",
      }));
    } else {
      setErrors((prev) => ({ ...prev, monthError: null }));
    }

    //check year
    if (year === "" || !year) {
      setErrors((prev) => ({ ...prev, yearError: "Year is required" }));
    } else if (!/^(2[2-9])|([3-9]\d)$/.test(year)) {
      setErrors((prev) => ({
        ...prev,
        yearError: "Year must be two digits, at least 22 ",
      }));
    } else {
      setErrors((prev) => ({ ...prev, yearError: null }));
    }

    //check cvc
    if (cvc === "" || !cvc) {
      setErrors((prev) => ({ ...prev, cvcError: "CVC must be numeric" }));
    } else if (!/^\d{3}$/.test(cvc)) {
      setErrors((prev) => ({
        ...prev,
        cvcError: "CVC must be 3 digits ",
      }));
    } else {
      setErrors((prev) => ({ ...prev, cvcError: null }));
    }

    //check for any errors
    //using setErrors function to get access to updated errors state
    setErrors((prevErrors) => {
      for (let key in prevErrors) {
        if (prevErrors[key]) {
          return prevErrors;
        }
      }
      //changing parent state data before child component unmounts
      setTimeout(() => {
        setValidSubmit(true);
      }, 500);
      return prevErrors;
    });
  };

  return (
    <form name="card-form" onSubmit={handleSubmit}>
      <label className="block" htmlFor="name">
        cardholder name
      </label>
      <input
        className={errors.nameError ? "error" : null}
        type="text"
        maxLength="25"
        name="name"
        placeholder="e.g. Jane Appleseed"
        value={name}
        onChange={handleChange}
      />
      {errors.nameError && <div className="error">{errors.nameError}</div>}
      <label className="block" htmlFor="number">
        card number
      </label>
      <input
        className={errors.numberError ? "error" : null}
        type="text"
        name="number"
        maxLength="16"
        placeholder="e.g. 1234 5678 9123 0000"
        value={number}
        onChange={handleChange}
      />
      {errors.numberError && <div className="error">{errors.numberError}</div>}
      <div className="date-and-cvc">
        <div className="date">
          <label className="block">exp.date (mm/yy)</label>
          <div className="flex">
            <input
              className={errors.monthError ? "error" : null}
              type="number"
              name="month"
              maxLength="3"
              max="12"
              min="1"
              placeholder="MM"
              value={month}
              onChange={handleChange}
            />
            <input
              className={errors.yearError ? "error" : null}
              type="number"
              name="year"
              maxLength="2"
              placeholder="YY"
              min="23"
              max="99"
              value={year}
              onChange={handleChange}
            />
          </div>
          {errors.monthError && (
            <div className="error">{errors.monthError}</div>
          )}
          {errors.yearError && <div className="error">{errors.yearError}</div>}
        </div>
        <div className="cvc">
          <label className="block" htmlFor="cvc">
            cvc
          </label>
          <input
            className={errors.cvcError ? "error" : null}
            type="number"
            name="cvc"
            maxLength="3"
            value={cvc}
            onChange={handleChange}
            placeholder="e.g. 123"
          />
          {errors.cvcError && <div className="error">{errors.cvcError}</div>}
        </div>
      </div>

      <button>Confirm</button>
    </form>
  );
};

export default CardForm;
