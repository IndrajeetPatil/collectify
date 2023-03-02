const express = require("express");
const router = express.Router();

const Collection = require("../models/Collection");

// @route   GET api/collections
// @desc    Get all collections
// @access  Public
router.get("/collections", (req, res) => {
  const userId = req.payload._id;
  return (
    Collection.find({ user: userId })
      // .populate("books")
      // .populate("movies")
      // .populate("paintings")
      // .populate("photos")
      // .populate("places")
      // .populate("songs")
      .then((collections) => res.status(200).json(collections))
  );
});

// @route   POST api/collections
// @desc    Create a collection
// @access  Public
router.post("/collections", (req, res) => {
  const newCollection = new Collection({
    name: req.body.name,
  });

  newCollection.save().then((collection) => res.json(collection));
});

// @route   DELETE api/collections/:id
// @desc    Delete a collection
// @access  Public
router.delete("/collections/:id", (req, res) => {
  Collection.findById(req.params.id)
    .then((collection) => collection.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
