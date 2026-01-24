const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log("mongodb connection failed");
  });
app.use('/auth',require('./routes/authRoute.js'))
app.get('/hi', (req, res) => {
  res.send("Hi from arun");
});
app.listen(5000, () => {
  console.log("Server is running on", 5000);
});
