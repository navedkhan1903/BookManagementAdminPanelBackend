const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.get("/", async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(201).json({ books });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
