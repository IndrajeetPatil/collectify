const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    photographer: {
      type: String,
      required: [true, "Photographer is required."],
      trim: true,
    },
    year: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    image: {
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

const Photo = model("Photo", photoSchema);

module.exports = Photo;
