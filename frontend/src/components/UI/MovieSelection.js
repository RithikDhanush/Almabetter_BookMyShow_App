/* The component imports useContext hook from the React library, a custom RadioComponent component, 
and an array called moviesList from a data file. It also imports a stylesheet called movieSelection.css. */
import React, { useContext , useEffect } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../../data";
import BsContext from "../../context/Context";
import "../styles/movieSelection.css";

const SelectMovie = () => {
  const context = useContext(BsContext);

//the useContext hook is used to access the movie and changeMovie values from the context object.
  const { movie, changeMovie } = context;

  useEffect(() => {

// Get the selected movie from local storage
    const selectedMovie = window.localStorage.getItem("movie");

// The useEffect function takes a callback function that is executed when the component mounts and any time movie or changeMovie change.
    if (selectedMovie && selectedMovie !== movie) {
      changeMovie(selectedMovie);
    }

/* If a selected movie is found in local storage and it is different than the current movie state, 
it updates the context with the selected movie using the changeMovie function. */
  }, [changeMovie, movie]);

/* handleChangeMovie that takes a value as input. This function updates the movie value in the context by calling the changeMovie 
function and also stores the selected movie in local storage. */

  const handleChangeMovie = (value) => {
// Update the selected movie in the context
    changeMovie(value);

// Store the selected movie in local storage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
{/* Display the heading  */}
      <h1 className="SM_heading">Select a Movie :-</h1>

{/* this code generates a list of radio buttons, with each button representing a movie option from the moviesList 
array. The handleChangeMovie function is called when the user selects a movie, which updates the movie value 
in the context and stores it in local storage. */}      
      <div className="SM_main_container">

{/* //The map() method loops through each element in the moviesList array and returns a 
new array with a RadioComponent for each element.  */}
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}  //  The el value of the current iteration, which represents the movie name.
              changeSelection={handleChangeMovie}  // The handleChangeMovie function that will be called when the user selects a movie.
              data={movie} // The movie value from the context, which is used to set the initial checked state of the radio button.
              key={index} // The index value of the current iteration, which React uses to keep track of each component in the array.
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
