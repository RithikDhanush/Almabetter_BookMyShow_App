const express = require("express"); 
const app = express(); 
const { connection } = require("./connection"); 


const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const path = require('path');


const PORT = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.use(cors()); 

connection(); 

app.use("/api", require("./routes")); 


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); 

module.exports = app;
