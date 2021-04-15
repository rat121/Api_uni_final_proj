const mongoose = require("mongoose");

const streetSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["Feature"],
  },
  propertys: {
    message: String,
    signsId: String,
    speed: {
      maxSpeed: String,
      lowSpeed: String,
    },
  },
  geometry: {
    type: {
      type: String,
      enum: ["Polygon"],
    },
    coordinates: {
      type: [[[Number]]], // Array of arrays of arrays of numbers
    },
  },
});
module.exports = mongoose.model("street", streetSchema);
