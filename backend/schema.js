/* The code defines a Mongoose schema for booking  that includes fields for the movie name, time slot, 
and seat numbers and their corresponding counts. The schema is exported as a Mongoose model with the name 
"bookmovietickets".*/


// Importing Mongoose library
const mongoose = require("mongoose");

// create a new schema for booking a movie
const { Schema } = mongoose;

const bookMovieSchema = new Schema({

// Creating a field for the name of the movie and time slot being booked with a data type of String
  movie: { type: String }, 
  slot: { type: String },// the time slot for the movie
  seats: {

// an object containing the seat numbers and their corresponding count
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number },
  },
});

// export the schema as a mongoose model
module.exports = mongoose.model("bookmovietickets", bookMovieSchema);
