const express = require("express");
const router = express.Router();

const Collection = require("../models/Collection");

// @route   GET api/collections
// @desc    Get all collections
// @access  Public
router.get("/collections", (req, res) => {
  const userId = req.payload._id;

  Collection.find({ user: userId })
    .then((collections) => {
      res.status(200).json(collections);
    })
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/delete
// @desc    Delete a collection
// @access  Public
router.delete("/collections/:id", (req, res) => {
  Collection.findByIdAndDelete(req.params.id)
    .then((deletedCollection) => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
