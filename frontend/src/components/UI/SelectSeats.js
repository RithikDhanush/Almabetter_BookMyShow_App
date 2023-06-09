//Importing  React, useState, useContext, useEffect, data from the seats array, the BsContext object, and the SeatsInput component.
import React, { useState, useContext, useEffect } from "react";
import { seats } from "../../data";
import "../styles/selectSeats.css";
import BsContext from "../../context/Context";
import SeatsInput from "./SeatsSetup";


/*The SelectSeats component defines two state variables: seat and changeSeats. seat is initialized as an empty array and changeSeats 
is a function that will be used to update the seat state variable. */
const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);

//The useContext hook is used to retrieve the noOfSeat state variable and the changeNoOfSeats function from the BsContext object.
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;

/* The useEffect hook is used to clear the selected seats whenever the noOfSeat state variable changes. This ensures that 
if the user changes the number of seats they want to book, any previously selected seats are cleared. */
  useEffect(() => {

// Clear selected seats when noOfSeat changes
    changeSeats([ ]);
  }, [noOfSeat]);

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats :-</h1>
        <div className="SS_main_container">
          {seats.map((e, index) => {
            return (
              <SeatsInput
                seat={seat} // the current selected seats array, which is stored in the component's local state
                key={index} //a unique identifier for each component, which is set to the index of the element in the seats array
                index={index}
                changeSeats={changeSeats} // a function to update the selected seats array
                noOfSeat={noOfSeat} // the number of seats selected by the user, which is stored in the context
                text={e} // the number of seats selected by the user, which is stored in the context

                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
