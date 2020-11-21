const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/books', async (req, res) => {
  const books = await Book.find({});
  res.json(books);
})

router.post('/books', async (req, res) => {
  const bookDetails = req.body;
  const newBook = await new Book(bookDetails).save();
  res.json(newBook);
})

router.delete('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  await Book.deleteOne({_id: bookId})
  res.send('Book deleted');
})

module.exports = router;