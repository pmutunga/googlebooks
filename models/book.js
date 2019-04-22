const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  book_id: { type: String },
  thumbnail: String,
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
