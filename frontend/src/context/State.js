//This code defines a React component called BsState which uses the useState hook to manage the state of the application

import React, { useState, useEffect } from "react";
import BsContext from "./Context";


/*It defines several state variables that are used to store various pieces of data that are important to the 
application. These variables include errorPopup, errorMessage, time, movie, noOfSeat, and lastBookingDetails */

const BsState = (props) => {

/* errorPopup is a boolean value that is used to determine whether or not an error message should be displayed 
to the user. errorMessage is a string that contains the message that should be displayed to the user in 
the event of an error. */

  const [errorPopup, setErrorPopup] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

//time and movie are strings that store the selected movie and time slot, respectively. 
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");

//noOfSeat is an object that stores the number of seats that have been selected for each seat type (A1, A2, A3, A4, D1, D2).
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

//lastBookingDetails is an object that stores the details of the last booking that was made.
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

// this is a backend api  
  const url = "https://almabetter-book-my-show-app-dhanush.vercel.app"

// Function to make a post request to the server with the booking details
  const handlePostBooking = async () => {

//handlePostBooking is used to send a post request to the server with the selected movie, slot, and seats to book a movie.
    const response = await fetch(`${url}/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
    });

    const data = await response.json();

// Show error popup if the response status is not 200
    setErrorPopup(true);
    setErrorMessage(data.message);

// Clear the form and the local storage if the response status is 200
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

// Function to make a get request to the server to get the last booking details.
//handleGetLastBooking, which are used to make API requests to the backend.
  const handleGetLastBooking = async () => {

    const response = await fetch(`${url}/api/booking`, {
      method: "GET",
    });

    const data = await response.json();
// Setting last booking details recieved from the backend.
    setLastBookingDetails(data.data);
  };


/*the component uses the useEffect hook to get the selected movie, slot, and seats from local storage and update the state accordingly.
 It also calls the handleGetLastBooking function to get the details of the last booking that was made.*/
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
/* The component then uses the BsContext.Provider component to provide all the required data to the child 
components of the application. The values passed as the value prop to the Provider component are the state 
variables and functions defined earlier in the component. 
These values can be accessed by child components using the useContext hook. */
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
