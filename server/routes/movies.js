const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

// @route   GET api/collections/movies
// @desc    Get all movies
// @access  Public
router.get("/collections/movies", (req, res) => {
  const userId = req.payload._id;
});

// @route   POST api/collections/movies
// @desc    Create a movie
// @access  Public
router.post("/collections/movies", (req, res) => {
  const userId = req.payload._id;
  const { title, year, director, plot, cast, genre, url } = req.body;

  const newMovie = new Movie({
    title,
    year,
    director,
    plot,
    cast,
    genre,
    url,
  });

  newMovie
    .save()
    .then((movie) => res.json(movie))
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
