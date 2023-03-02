const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required."],
      trim: true,
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

const Book = model("Book", bookSchema);

module.exports = Book;
