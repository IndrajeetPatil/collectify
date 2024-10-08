const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const User = require("../models/User.js");
const Collection = require("../models/Collection.js");

const saltRounds = 10;

// Create a new user in the database
router.post("/signup", (req, res, next) => {
  const { email, password, name } = req.body;

  // Although these fields are required in the HTML form, we still need to check here
  // in case the user manipulates the HTML and removes the required attribute
  const isEmailEmpty = email === "";
  const isPasswordEmpty = password === "";
  const isNameEmpty = name === "";
  const isAnyCredentialEmpty = isEmailEmpty || isPasswordEmpty || isNameEmpty;

  if (isAnyCredentialEmpty) {
    return res
      .status(400)
      .json({ message: "Provide email, password and name" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Provide a valid email address." });
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must have at least 6 characters and contain at least one number, one lowercase and uppercase letter.",
    });
  }

  // Check the users collection if a user with the same email already exists
  // And if it doesn't, create a new user in the database
  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        return res.status(400).json({ message: "User already exists." });
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return User.create({ email, password: hashedPassword, name });
    })
    .then((createdUser) => {
      const { email, name, _id } = createdUser;
      const user = { email, name, _id };
      res.status(201).json({ user: user });
      return createdUser;
    })
    .then((createdUser) => {
      return Collection.create({ user: createdUser._id });
    })
    .then((createdCollection) => {
      return User.findByIdAndUpdate(createdCollection.user, {
        collections: createdCollection._id,
      });
    })
    .catch((err) => next(err));
});

// Verify email and password and return a token
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(401).json({ message: "User not found." });
      }

      const isPasswordCorrect = bcrypt.compareSync(
        password,
        foundUser.password,
      );

      if (isPasswordCorrect) {
        const { _id, email, name } = foundUser;
        const payload = { _id, email, name };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });

        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Incorrect password." });
      }
    })
    .catch((err) => next(err));
});

// Verify token stored on the client
router.get("/verify", isAuthenticated, (req, res) => {
  res.status(200).json(req.payload);
});

module.exports = router;
