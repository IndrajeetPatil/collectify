const express = require("express");
const router = express.Router();

const Photo = require("../models/Photo");
const Collection = require("../models/Collection");

// @route   GET api/collections/photos
// @desc    Get all photos
// @access  Public
router.get("/collections/photos", (req, res) => {
  const userId = req.payload._id;

  Collection.findOne({ user: userId })
    .populate("photos")
    .then((collection) => res.json(collection.photos))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   POST api/collections/photos
// @desc    Create a photo and update collection
// @access  Public
router.post("/collections/photos", (req, res) => {
  const userId = req.payload._id;

  Photo.create({ ...req.body })
    .then((newPhoto) => {
      return Collection.findOneAndUpdate({ user: userId }, { $push: { photos: newPhoto._id } }, { new: true }).then(
        (updatedCollection) => {
          return Photo.findOneAndUpdate(
            { _id: newPhoto._id },
            { $push: { collections: updatedCollection._id } },
            { new: true },
          );
        },
      );
    })
    .then((updatedPhoto) => res.json(updatedPhoto))
    .catch((err) => res.status(400).json({ success: false }));
});

// @route   GET api/collections/photos/:id
// @desc    Get a photo
// @access  Public
router.get("/collections/photos/:id", (req, res) => {
  const photoId = req.params.id;

  Photo.findById(photoId)
    .then((photo) => res.json(photo))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/collections/photos/:id
// @desc    Update a photo
// @access  Public
router.put("/collections/photos/:id", (req, res) => {
  const photoId = req.params.id;

  Photo.findByIdAndUpdate(photoId, { ...req.body })
    .then((updatedPhoto) => res.json(updatedPhoto))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/photos/delete
// @desc    Delete a photo and update collection
// @access  Public
router.delete("/collections/photos/:id", (req, res) => {
  const photoId = req.params.id;
  const userId = req.payload._id;

  Photo.findByIdAndDelete(photoId)
    .then((deletedPhoto) => {
      return Collection.findOneAndUpdate({ user: userId }, { $pull: { photos: photoId } }, { new: true });
    })
    .then((updatedCollection) => res.json(updatedCollection))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
