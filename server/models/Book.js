const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
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
    author: {
      type: [],
      required: [true, "Author is required."],
      default: [],
      trim: true,
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
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["Read", "Reading", "To Read"],
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
      trim: true,
    },
    cover: {
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

const Book = model("Book", bookSchema);

module.exports = Book;
