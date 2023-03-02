const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
      trim: true,
    },
    photographer: {
      type: String,
      required: [true, "Photographer is required."],
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

const Photo = model("Photo", photoSchema);

module.exports = Photo;
