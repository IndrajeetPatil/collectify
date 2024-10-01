const express = require("express");
const router = express.Router();

const Song = require("../models/Song");
const Collection = require("../models/Collection");

// @route   GET api/collections/songs
// @desc    Get all songs
// @access  Public
router.get("/collections/songs", (req, res) => {
  const userId = req.payload._id;

  Collection.findOne({ user: userId })
    .populate("songs")
    .then((collection) => res.json(collection.songs))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   POST api/collections/songs
// @desc    Create a song and update collection
// @access  Public
router.post("/collections/songs", (req, res) => {
  const userId = req.payload._id;

  Song.create({ ...req.body })
    .then((newSong) => {
      return Collection.findOneAndUpdate(
        { user: userId },
        { $push: { songs: newSong._id } },
        { new: true },
      ).then((updatedCollection) => {
        return Song.findOneAndUpdate(
          { _id: newSong._id },
          { $push: { collections: updatedCollection._id } },
          { new: true },
        );
      });
    })
    .then((updatedSong) => res.json(updatedSong))
    .catch((err) => res.status(400).json({ success: false }));
});

// @route   GET api/collections/songs/:id
// @desc    Get a song
// @access  Public
router.get("/collections/songs/:id", (req, res) => {
  const songId = req.params.id;

  Song.findById(songId)
    .then((song) => res.json(song))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/collections/songs/:id
// @desc    Update a song
// @access  Public
router.put("/collections/songs/:id", (req, res) => {
  const songId = req.params.id;

  Song.findByIdAndUpdate(songId, { ...req.body })
    .then((updatedSong) => res.json(updatedSong))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/songs/delete
// @desc    Delete a song and update collection
// @access  Public
router.delete("/collections/songs/:id", (req, res) => {
  const songId = req.params.id;
  const userId = req.payload._id;

  Song.findByIdAndDelete(songId)
    .then((deletedSong) => {
      return Collection.findOneAndUpdate(
        { user: userId },
        { $pull: { songs: songId } },
        { new: true },
      );
    })
    .then((updatedCollection) => res.json(updatedCollection))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
