import React, { useState, useEffect } from "react";
import BsContext from "./Context";

const BsState = (props) => {

  const [errorPopup, setErrorPopup] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");

  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  const [lastBookingDetails, setLastBookingDetails] = useState(null);


  const url = "http://localhost:8080"


  const handlePostBooking = async () => {
    const response = await fetch(`${url}/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
    });

    const data = await response.json();

    setErrorPopup(true);
    setErrorMessage(data.message);

    if (response.status === 200) {
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);

      window.localStorage.clear();
    }
  };

  const handleGetLastBooking = async () => {
    const response = await fetch(`${url}/api/booking`, {
      method: "GET",
    });

    const data = await response.json();
    setLastBookingDetails(data.data);
  };

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if (movie || slot || seats) {
      changeTime(slot);
      changeMovie(movie);
      changeNoOfSeats(seats);
    }
    handleGetLastBooking();
  }, []);

  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
