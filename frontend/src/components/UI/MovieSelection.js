import React, { useContext , useEffect } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../../data";
import BsContext from "../../context/Context";
import "../styles/movieSelection.css";

const SelectMovie = () => {
  const context = useContext(BsContext);
  const { movie, changeMovie } = context;

  useEffect(() => {
    const selectedMovie = window.localStorage.getItem("movie");

    if (selectedMovie && selectedMovie !== movie) {
      changeMovie(selectedMovie);
    }
  }, [changeMovie, movie]);


  const handleChangeMovie = (value) => {
    changeMovie(value);

    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el} 
              changeSelection={handleChangeMovie}  
              data={movie}
              key={index} 
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
