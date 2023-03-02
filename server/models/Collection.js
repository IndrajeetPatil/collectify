const { Schema, model } = require("mongoose");

const collectionSchema = new Schema(
  {
    movies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
    paintings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Painting",
      },
    ],
    places: [
      {
        type: Schema.Types.ObjectId,
        ref: "Place",
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const Collection = model("Collection", collectionSchema);

module.exports = Collection;
