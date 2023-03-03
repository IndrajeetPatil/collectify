const { Schema, model } = require("mongoose");

const collectionSchema = new Schema(
  {
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
        default: [],
      },
    ],
    movies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        default: [],
      },
    ],
    paintings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Painting",
        default: [],
      },
    ],
    photos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Photo",
        default: [],
      },
    ],
    places: [
      {
        type: Schema.Types.ObjectId,
        ref: "Place",
        default: [],
      },
    ],
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song",
        default: [],
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
