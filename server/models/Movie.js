const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Year is required."],
    },
    genre: {
      type: String,
      enum: [
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
        "Other",
      ],
      required: true,
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
