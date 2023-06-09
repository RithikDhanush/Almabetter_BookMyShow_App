//This code imports the Express module and creates a new instance of the app.
const express = require("express"); 
const app = express(); 

//importing the connection.js file that connected to the database ( mongodb )
const { connection } = require("./connection"); 

/* These three lines import the middleware modules cors, body-parser, 
and path to handle cross-origin requests, parse incoming request bodies, and manage file paths, respectively. */
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const path = require('path');

// This line sets the server's port number to the environment variable PORT if it exists, otherwise to the default port 8080.
const PORT = process.env.PORT || 8080; 


//These lines add middleware to the Express app. body-parser is used to parse incoming request bodies as URL-encoded or JSON data.
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


// cors is used to enable cross-origin requests from the client-side.
app.use(cors()); 


//This code calls the connection function to connect to a MongoDB database.
connection(); 


/* This code mounts the middleware function require("./routes") on the app path /api. 
This means that any request that starts with /api will be handled by the routes defined in the ./routes file. */
app.use("/api", require("./routes")); 


//This code starts the server listening on the specified port number and prints a message to the console once it's ready.
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); 

module.exports = app;
