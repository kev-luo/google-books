const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/google', async (req, res) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${req.query.title}`
  const books = await axios.get(url);
  res.json(books);
})

module.exports = router;