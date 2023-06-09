import React from "react";
import "../styles/radioComponent.css";

const RadioComponent = ({ text, changeSelection, data }) => {

  const handleChecked = (value) => {
    changeSelection(value);
  };

  return (
    <div
      name={text}
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text);
      }}
    >
      <span className={"text"}>{text}</span>
    </div>
  );
};

export default RadioComponent;
