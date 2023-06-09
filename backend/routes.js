const express = require("express");

const router = express.Router(); 

const Schema = require("./schema"); 

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json()); 

 

router.post("/booking", async (req, res) => {

  const { movie, slot, seats } = req.body; 

  const myData = new Schema({ movie, slot, seats });

  const saved = await myData.save();

  if (saved) {
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
});



router.get("/booking", async (req, res) => {
  const myData = await Schema.find().sort({ _id: -1 }).limit(1)

  if (myData.length === 0) {
    res.status(200).json({ data: null, message: "No previous Booking found!" });
  } else {
    res.status(200).json({ data: myData[0] });
  }
});

module.exports = router; 
