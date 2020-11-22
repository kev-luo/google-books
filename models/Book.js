const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  description: String,
  image: String,
  link: String,
  googleId: String,
})

module.exports = mongoose.model("Book", bookSchema);