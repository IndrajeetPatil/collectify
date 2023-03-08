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
    image: {
      type: String,
      default: "",
      required: false,
    },
    feedback: {
      type: [String],
      default: [],
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
