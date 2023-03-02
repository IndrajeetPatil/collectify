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
    director: {
      type: String,
      required: false,
    },
    genre: {
      type: String,
      enum: [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Thriller",
        "Western",
      ],
      required: false,
    },
    url: {
      type: String,
      required: false,
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
