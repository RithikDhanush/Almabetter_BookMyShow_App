import LastBookingDetails from "../UI/LastBookingDetails";
import SelectMovie from "../UI/MovieSelection";
import SelectSeats from "../UI/SelectSeats";
import TimeShedule from "../UI/MovieTiming";
import Modal from "../UI/ErrorModal";

import "../styles/Home.css";

import BsContext from "../../context/Context";
import { useContext ,useMemo } from "react";

const Home = (props) => {

  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
    changeNoOfSeats,
  } = context;




  const checkNegativeSeatsValidity = useMemo(() => {
    
    return (seats) => {
      for (let seat in seats) {
        if (Number(seats[seat]) < 0) {
          return true;
        }
      }
      return false;
    };
  }, []);
  
  


  const checkZeroSeatsValidity = useMemo(() => {
  return (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };
}, []);


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
