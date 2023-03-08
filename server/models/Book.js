const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
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
        "Other",
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
      default: "",
      required: false,
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
