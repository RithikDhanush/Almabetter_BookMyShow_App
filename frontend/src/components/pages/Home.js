/*The Home component in this code imports several other components and uses the useContext hook to retrieve data 
from the Context . It also defines several helper functions for validation and booking handling. 
Finally, it renders the UI elements imported below and returns the component.
When the user clicks the "Book Now" button, the handleBookNow function is called, 
which performs validation checks and either displays an error message or handles the booking process. */


// importing the UI components from the UI folder  //
import LastBookingDetails from "../UI/LastBookingDetails";
import SelectMovie from "../UI/MovieSelection";
import SelectSeats from "../UI/SelectSeats";
import TimeShedule from "../UI/MovieTiming";
import Modal from "../UI/ErrorModal";

// importing the styles from Home.css //
import "../styles/Home.css";

//  importing the context file from context folder //
import BsContext from "../../context/Context";
import { useContext ,useMemo } from "react";

// This line defines a functional component named Home that accepts props as a parameter. //
const Home = (props) => {

// This line uses the useContext hook to access the value of the BsContext context and assigns it to the context variable. //
  const context = useContext(BsContext);

// This line uses destructuring assignment to extract specific values from the context object. //
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
    changeNoOfSeats,
  } = context;



// This code defines a memoized function named checkNegativeSeatsValidity using the useMemo hook. //
  const checkNegativeSeatsValidity = useMemo(() => {

// The function takes a seats object as an argument and checks if any of the seat values are negative. //
    return (seats) => {

/* It iterates over each seat in the seats object using a for...in loop and checks if the seat value, 
after converting it to a number using Number(), is less than zero. */

      for (let seat in seats) {
        if (Number(seats[seat]) < 0) {
          
// If a negative seat value is found, the function immediately returns true, indicating that there are negative seats. //
          return true;
        }
      }

// If the loop completes without finding any negative seat values, the function returns false, indicating that all seats are non-negative. //
      return false;
    };
  }, []);
  
  

// The checkZeroSeatsValidity is another memoized function created using the useMemo hook.
  const checkZeroSeatsValidity = useMemo(() => {

// This function takes a seats object as an argument and checks if all seat values are zero.

  return (seats) => {

/* It iterates over each seat in the seats object using a for...in loop and checks if the seat value,
after converting it to a number using Number(), is greater than zero. */
    for (let seat in seats) {

/* If a seat value greater than zero is found, the function immediately returns false, 
indicating that there are non-zero seats.*/
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }

/* If the loop completes without finding any seat values greater than zero, 
the function returns true, indicating that all seats are zero.*/
    return true;
  };
}, []);

// This code defines the handleBookNow function responsible for handling the booking process.
  const handleBookNow = () => {
    switch (true) {
      case !movie:
        setErrorPopup(true);
        setErrorMessage("Please select a movie!");
        break;
      case !time:
        setErrorPopup(true);
        setErrorMessage("Please select a time slot!");
        break;
      case checkNegativeSeatsValidity(noOfSeat) || checkZeroSeatsValidity(noOfSeat):
        setErrorPopup(true);
        setErrorMessage("Invalid Seats!");
        break;
      default:
        handlePostBooking();
        changeNoOfSeats({});
    }
  };







/*  The component also renders the Modal component, which displays error messages, and the SelectMovie, 
LastBookingDetails, TimeShedule, and SelectSeats components, which are used to select a movie, 
display the user's last booking details, select a time slot, and select the number of seats, respectively. */
  return (
    <>
      <Modal />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              <SelectMovie />
            </div>
            <div className="last_booking_details_container">
              <LastBookingDetails />
            </div>
          </div>
          <div className="time_seats_container">
            <TimeShedule />
            <SelectSeats />

{/* The onClick handler for the button element calls the handleBookNow function. */}
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
