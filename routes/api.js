const express = require('express');
const router = express.Router();

router.get('/books', async (req, res) => {
  res.sendStatus(200);
})

router.post('/books', async (req, res) => {
  res.sendStatus(200);
})

router.get('/books/:id', async (req, res) => {
  res.sendStatus(200);
})

module.exports = router;