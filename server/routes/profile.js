const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Collection = require("../models/Collection");

const uploader = require("../config/cloudinary");

// @route   GET api/profile
// @desc    Get current profile
// @access  Public
router.get("/profile", (req, res) => {
  const userId = req.payload._id;
  console.log("userId", userId);

  User.findOne({ _id: userId })
    .populate("collections")
    .then((user) => {
      console.log(user);
      return res.json(user);
    })
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/profile
// @desc    Update current profile
// @access  Public
router.put("/profile", (req, res) => {
  const userId = req.payload._id;

  User.findOneAndUpdate({ _id: userId }, { ...req.body }, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/profile
// @desc    Delete current profile
// @access  Public
router.delete("/profile", (req, res) => {
  const userId = req.payload._id;

  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      Collection.findOneAndDelete({ user: userId }).then((deletedCollection) => {
        return res.json(deletedCollection);
      });
    })
    .catch((err) => res.status(404).json({ success: false }));
});

router.post("/upload", uploader.single("image"), (req, res, next) => {
  if (!req.file) {
    return next(new Error("No file uploaded!"));
  }

  res.json({ fileUrl: req.file.path, fileName: req.file.originalname });
});

module.exports = router;
