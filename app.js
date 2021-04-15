const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//IMPORT ROUTES
const streetRoute = require("./ROUTES/streets");

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use("/streets", streetRoute);

//Conect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);

//listening to the server
app.listen(3000);
