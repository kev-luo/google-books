const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.post("/books", async (req, res) => {
  try {
    const bookDetails = req.body;
    const newBook = await new Book(bookDetails).save();
    res.json(newBook);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.deleteOne({ googleId: bookId });
    res.json(deletedBook);
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
