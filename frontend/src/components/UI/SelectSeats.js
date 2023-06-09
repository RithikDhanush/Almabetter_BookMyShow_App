import React, { useState, useContext, useEffect } from "react";
import { seats } from "../../data";
import "../styles/selectSeats.css";
import BsContext from "../../context/Context";
import SeatsInput from "./SeatsSetup";


const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;


  useEffect(() => {
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
                seat={seat} 
                key={index} 
                index={index}
                changeSeats={changeSeats} 
                noOfSeat={noOfSeat} 
                text={e}

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
