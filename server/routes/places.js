const express = require("express");
const router = express.Router();

const Place = require("../models/Place");
const Collection = require("../models/Collection");

// @route   GET api/collections/places
// @desc    Get all places
// @access  Public
router.get("/collections/places", (req, res) => {
  const userId = req.payload._id;

  Collection.findOne({ user: userId })
    .populate("places")
    .then((collection) => res.json(collection.places))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   POST api/collections/places
// @desc    Create a place and update collection
// @access  Public
router.post("/collections/places", (req, res) => {
  const userId = req.payload._id;

  Place.create({ ...req.body })
    .then((newPlace) => {
      return Collection.findOneAndUpdate({ user: userId }, { $push: { places: newPlace._id } }, { new: true }).then(
        (updatedCollection) => {
          return Place.findOneAndUpdate(
            { _id: newPlace._id },
            { $push: { collections: updatedCollection._id } },
            { new: true },
          );
        },
      );
    })
    .then((updatedPlace) => res.json(updatedPlace))
    .catch((err) => res.status(400).json({ success: false }));
});

// @route   GET api/collections/places/:id
// @desc    Get a place
// @access  Public
router.get("/collections/places/:id", (req, res) => {
  const placeId = req.params.id;

  Place.findById(placeId)
    .then((place) => res.json(place))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/collections/places/:id
// @desc    Update a place
// @access  Public
router.put("/collections/places/:id", (req, res) => {
  const placeId = req.params.id;

  Place.findByIdAndUpdate(placeId, { ...req.body })
    .then((updatedPlace) => res.json(updatedPlace))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/places/delete
// @desc    Delete a place and update collection
// @access  Public
router.delete("/collections/places/:id", (req, res) => {
  const placeId = req.params.id;
  const userId = req.payload._id;

  Place.findByIdAndDelete(placeId)
    .then((deletedPlace) => {
      return Collection.findOneAndUpdate({ user: userId }, { $pull: { places: placeId } }, { new: true });
    })
    .then((updatedCollection) => res.json(updatedCollection))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
