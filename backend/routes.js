/* The code sets up an express router with two routes for handling booking requests and retrieving the 
most recent booking data. It uses the body-parser middleware to parse incoming request bodies and the cors 
middleware to enable cross-origin resource sharing. The Schema imported in the module defines the schema 
for the booking data that is stored in the database.*/


//importing express 
const express = require("express");


//Creates a new router object from the Express.js library and assigns it to a constant variable named 'router'.
const router = express.Router(); 


//Imports a custom schema module from the schems.js file  and assigns it to a constant variable named 'Schema'.
const Schema = require("./schema"); 


//Creates an instance of the Express.js application and assigns it to a constant variable named 'app'.
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser"); 


// Setting up body-parser middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ extended: false }));


// Setting up express middleware to parse JSON data
app.use(express.json()); 

 
/*The first route /booking is a --POST-- request route that handles booking requests sent to the server.
It first extracts data from the request body (movie, slot, and seats) and creates a new instance of the 
Schema with the extracted data. It then saves the new booking instance to the database and sends a success 
response with the booking data and a success message if the booking is successful. If the booking is not 
successful, it sends an error response with a null data and an error message.*/
router.post("/booking", async (req, res) => {


// Extracting data from request body
  const { movie, slot, seats } = req.body; 

// Creating a new instance of the booking schema with the extracted data
  const myData = new Schema({ movie, slot, seats });

// Saving the new booking instance to the database
  const saved = await myData.save();

  if (saved) {

// If booking is successful, send a success response with the booking data and a success message
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {

// If booking is not successful, send an error response with a null data and an error message
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
});


/*The second route /booking is a --GET-- request route that retrieves the booking data from the database. 
It first finds the most recent booking data from the database using the find() method with the sort() method 
to sort the data by _id in descending order. If no booking data is found, it sends a response with a null data 
and a message. If booking data is found, it sends a success response with the booking data. */


// Route to get the most recent booking data
router.get("/booking", async (req, res) => {
  const myData = await Schema.find().sort({ _id: -1 }).limit(1)
// Finding the most recent booking data from the database

  if (myData.length === 0) {
// If no booking data is found, send a response with a null data and a message
    res.status(200).json({ data: null, message: "No previous Booking found!" });
  } else {

// If booking data is found, send a success response with the booking data
    res.status(200).json({ data: myData[0] });
  }
});

module.exports = router; 
