const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    location: {
      type: Object,
      required: [true, "Location is required."],
      unique: true,
    },
    latitude: {
      type: Number,
      required: [true, "Latitude is required."],
    },
    longitude: {
      type: Number,
      required: [true, "Longitude is required."],
    },
    visited: {
      type: Boolean,
      required: true,
      default: false,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    image: {
      type: String,
      required: false,
    },
    collections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Place = model("Place", placeSchema);

module.exports = Place;
