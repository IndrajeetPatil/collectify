const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    sex: {
      type: String,
      enum: ["", "male", "female", "non-binary"],
      default: "",
      required: false,
    },
    image: {
      type: String,
      default: "",
      required: false,
    },
    feedbackRating: {
      type: [String],
      enum: ["Very Bad", "Bad", "Medicore", "Good", "Very Good"],
      default: [],
      required: false,
    },
    feedbackText: {
      type: [String],
      default: [],
      required: false,
    },
    feedbackTimestamp: {
      type: [Date],
      default: [Date.now],
      required: false,
    },
    collections: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

module.exports = User;
