import React, { useState ,useEffect } from "react";
import "../styles/seatsSetup.css";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {

// Use state to manage the input value
  const [inputValue, setInputValue] = useState( "");

  useEffect(() => {

// Update the input value whenever noOfSeat[text] changes
    setInputValue(noOfSeat?.[text] || "");
    
  }, [noOfSeat?.[text] ]);

// Function to handle the change in seat input and update the state and local storage
  const change_seats = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

// Update the noOfSeat object with the new seat value
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(newValue) });

// Store the updated noOfSeat object in local storage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({ ...noOfSeat, [e.target.name]: Number(newValue) })
    );
  };


// Function to handle the selection of a seat
  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div
      name={text}

// Set the class name based on whether the seat is selected or not
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}
    >
      <span className={"text"}>{text}</span>

{/* Input field for the number of seats */}
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        value={inputValue}
      />
    </div>
  );
};

export default SeatsInput;
