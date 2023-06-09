require("dotenv").config();  
const { MongoClient } = require("mongodb");


let mongoose = require("mongoose");
mongoose.set("strictQuery", true);


const mongoURI = process.env.MONGODBURI;


const connectToMongo = async () => {

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
