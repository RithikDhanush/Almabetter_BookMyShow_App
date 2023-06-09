import React from "react";
import "../styles/radioComponent.css";

// Component for radio buttons used in movie and time selection
// Function to handle radio button selection
const RadioComponent = ({ text, changeSelection, data }) => {

/* The handleChecked function is used to handle the radio button selection. It receives the selected value as an argument and calls the changeSelection function, 
which is also passed from the parent component, with the selected value. */

  const handleChecked = (value) => {

// pass the selected value to the changeSelection function (a prop passed from parent component)
    changeSelection(value);
  };

  return (
    <div
      name={text}

// Apply the 'active' class if the radio button is selected (i.e., data is equal to the text)
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={() => {

// Call the handleChecked function with the selected value when the radio button is clicked
        handleChecked(text);
      }}
    >

{/*  render the text as a label for the radio button */}
      <span className={"text"}>{text}</span>
    </div>
  );
};

export default RadioComponent;
