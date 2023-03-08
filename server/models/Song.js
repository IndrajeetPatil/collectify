const { Schema, model } = require("mongoose");

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, "Artist is required."],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Year is required."],
    },
    genre: {
      type: String,
      enum: [
        "Alternative",
        "Blues",
        "Classical",
        "Country",
        "Dance",
        "Electronic",
        "Folk",
        "Hip Hop",
        "Indie",
        "Jazz",
        "Latin",
        "Metal",
        "Pop",
        "Punk",
        "R&B",
        "Reggae",
        "Rock",
        "Soul",
        "World",
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

const Song = model("Song", songSchema);

module.exports = Song;
