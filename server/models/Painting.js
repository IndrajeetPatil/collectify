const { Schema, model } = require("mongoose");

const paintingSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
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
        "Abstract",
        "Baroque",
        "Cubism",
        "Expressionism",
        "Fauvism",
        "Impressionism",
        "Minimalism",
        "Modernism",
        "Pop Art",
        "Renaissance",
        "Romanticism",
        "Surrealism",
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

const Painting = model("Painting", paintingSchema);

module.exports = Painting;
