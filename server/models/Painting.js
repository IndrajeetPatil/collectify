const { Schema, model } = require("mongoose");

const paintingSchema = new Schema(
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
    artist: {
      type: String,
      required: [true, "Artist is required."],
      trim: true,
    },
    seenOriginal: {
      type: Boolean,
      required: false,
      default: false,
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
        "Other",
      ],
      required: false,
    },
    image: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    description: {
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

const Painting = model("Painting", paintingSchema);

module.exports = Painting;
