const express = require("express");
const router = express.Router();

const Book = require("../models/Book");
const Collection = require("../models/Collection");

// @route   GET api/collections/books
// @desc    Get all books
// @access  Public
router.get("/collections/books", (req, res) => {
  const userId = req.payload._id;

  Collection.findOne({ user: userId })
    .populate("books")
    .then((collection) => res.json(collection.books))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   POST api/collections/books
// @desc    Create a book and update collection
// @access  Public
router.post("/collections/books", (req, res) => {
  const userId = req.payload._id;

  Book.create({ ...req.body })
    .then((newBook) => {
      return Collection.findOneAndUpdate({ user: userId }, { $push: { books: newBook._id } }, { new: true }).then(
        (updatedCollection) => {
          return Book.findOneAndUpdate(
            { _id: newBook._id },
            { $push: { collections: updatedCollection._id } },
            { new: true },
          );
        },
      );
    })
    .then((updatedBook) => res.json(updatedBook))
    .catch((err) => res.status(400).json({ success: false }));
});

// @route   GET api/collections/books/:id
// @desc    Get a book
// @access  Public
router.get("/collections/books/:id", (req, res) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/collections/books/:id
// @desc    Update a book
// @access  Public
router.put("/collections/books/:id", (req, res) => {
  const bookId = req.params.id;

  Book.findByIdAndUpdate(bookId, { ...req.body })
    .then((updatedBook) => res.json(updatedBook))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   DELETE api/collections/books/delete
// @desc    Delete a book and update collection
// @access  Public
router.delete("/collections/books/:id", (req, res) => {
  const bookId = req.params.id;
  const userId = req.payload._id;

  Book.findByIdAndDelete(bookId)
    .then((deletedBook) => {
      return Collection.findOneAndUpdate({ user: userId }, { $pull: { books: bookId } }, { new: true });
    })
    .then((updatedCollection) => res.json(updatedCollection))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
