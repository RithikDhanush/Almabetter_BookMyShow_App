/* This code sets up the environment to establish a connection with the MongoDB database using Mongoose 
and the mongodb package. It loads the environment variables using dotenv, retrieves the MongoDB URI 
from the environment variables, and defines a function to connect to the MongoDB database.*/

/* This line loads the configuration from a .env file, which allows the use of environment variables in the code.
The dotenv library is used to accomplish this. */
require("dotenv").config();  

/* This line imports the MongoClient object from the "mongodb" library. 
The MongoClient is used to establish a connection to a MongoDB database. */
const { MongoClient } = require("mongodb");


/* This line imports the mongoose library, which is an Object Data Modeling (ODM) library for MongoDB.
 mongoose provides a higher-level abstraction for working with MongoDB and simplifies database operations */
let mongoose = require("mongoose");

/* This line configures Mongoose to enforce strict query behavior. 
It ensures that queries with undefined or null values are not executed. */
mongoose.set("strictQuery", true);


/* This line retrieves the MongoDB connection URI from the environment variables using process.env. 
The connection URI should be stored in the "MONGODBURI" environment variable. 
This allows the code to connect to the specified MongoDB server. */
const mongoURI = mongodb+srv://dhanushrithik5109:rithik@cluster0.o0wyqli.mongodb.net;


// This code defines an asynchronous function named connectToMongo which handles the connection to the MongoDB database.
const connectToMongo = async () => {


/* This code establishes a connection to a MongoDB server using Mongoose, with error handling and logging of connection status. */
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
      
    });
};


exports.connection = connectToMongo;
