const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");
const Collection = require("../models/Collection");

// @route   GET api/collections/movies
// @desc    Get all movies
// @access  Public
router.get("/collections/movies", (req, res) => {
  const userId = req.payload._id;

  Collection.findOne({ user: userId })
    .populate("movies")
    .then((collection) => res.json(collection.movies))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   POST api/collections/movies
// @desc    Create a movie
// @access  Public
router.post("/collections/movies", (req, res) => {
  const userId = req.payload._id;

  Movie.create({ ...req.body })
    .then((newMovie) => {
      return Collection.findOneAndUpdate({ user: userId }, { $push: { movies: newMovie._id } }, { new: true }).then(
        (updatedCollection) => {
          return Movie.findOneAndUpdate(
            { _id: newMovie._id },
            { $push: { collections: updatedCollection._id } },
            { new: true },
          );
        },
      );
    })
    .then((updatedMovie) => res.json(updatedMovie))
    .catch((err) => res.status(400).json({ success: false }));
});

// @route   GET api/collections/movies/:id
// @desc    Get a movie
// @access  Public
router.get("/collections/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => res.json(movie))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/collections/movies/:id
// @desc    Update a movie
// @access  Public
router.put("/collections/movies/:id", (req, res) => {
  Movie.findByIdAndUpdate(req.params.id)
    .then((movie) => res.json(movie))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/movies/delete
// @desc    Delete a movie
// @access  Public
router.delete("/collections/movies/:id", (req, res) => {
  Movie.findByIdAndDelete(req.params.id)

    .then((deletedMovie) => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
