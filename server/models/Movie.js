const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Year is required."],
    },
    genre: {
      type: String,
      default: "Unknown",
      enum: [
        "Unknown",
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Documentary",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery/Thriller",
        "Romance",
        "Sci-Fi",
        "Western",
      ],
      required: false,
    },
    director: {
      type: Array,
      default: [""],
      required: false,
    },
    plot: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    url: {
      type: String,
      required: false,
      trim: true,
    },
    poster: {
      type: String,
      required: false,
      default: "",
      trim: true,
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

const Movie = model("Movie", movieSchema);

module.exports = Movie;
