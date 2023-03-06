const express = require("express");
const router = express.Router();

const Painting = require("../models/Painting");
const Collection = require("../models/Collection");

// @route   GET api/collections/paintings
// @desc    Get all paintings
// @access  Public
router.get("/collections/paintings", (req, res) => {
  const userId = req.payload._id;

  Collection.findOne({ user: userId })
    .populate("paintings")
    .then((collection) => res.json(collection.paintings))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   POST api/collections/paintings
// @desc    Create a painting and update collection
// @access  Public
router.post("/collections/paintings", (req, res) => {
  const userId = req.payload._id;

  Painting.create({ ...req.body })
    .then((newPainting) => {
      return Collection.findOneAndUpdate(
        { user: userId },
        { $push: { paintings: newPainting._id } },
        { new: true },
      ).then((updatedCollection) => {
        return Painting.findOneAndUpdate(
          { _id: newPainting._id },
          { $push: { collections: updatedCollection._id } },
          { new: true },
        );
      });
    })
    .then((updatedPainting) => res.json(updatedPainting))
    .catch((err) => res.status(400).json({ success: false }));
});

// @route   GET api/collections/paintings/:id
// @desc    Get a painting
// @access  Public
router.get("/collections/paintings/:id", (req, res) => {
  const paintingId = req.params.id;

  Painting.findById(paintingId)
    .then((painting) => res.json(painting))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/collections/paintings/:id
// @desc    Update a painting
// @access  Public
router.put("/collections/paintings/:id", (req, res) => {
  const paintingId = req.params.id;

  Painting.findByIdAndUpdate(paintingId, { ...req.body })
    .then((updatedPainting) => res.json(updatedPainting))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/paintings/delete
// @desc    Delete a painting and update collection
// @access  Public
router.delete("/collections/paintings/:id", (req, res) => {
  const paintingId = req.params.id;
  const userId = req.payload._id;

  Painting.findByIdAndDelete(paintingId)
    .then((deletedPainting) => {
      return Collection.findOneAndUpdate({ user: userId }, { $pull: { paintings: paintingId } }, { new: true });
    })
    .then((updatedCollection) => res.json(updatedCollection))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
