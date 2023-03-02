const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    city: {
      type: String,
      required: [true, "Name is required."],
      unique: true,
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Country is required."],
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Place = model("Place", placeSchema);

module.exports = Place;
