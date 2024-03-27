const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.post("/", async (req, res, next) => {
  try {
    const { id, title, author, desc, cover } = req.body;
    await Book.updateOne({ id: id }, { title: title, author: author, desc: desc, cover: cover });

    return res.status(201).json({ books });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
