const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: String,
  title: String,
  author: String,
  desc: String,
  cover: String,
});

module.exports = mongoose.model("Book", bookSchema);
