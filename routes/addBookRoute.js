const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

function generateUniqueId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 3 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
}

router.post("/", async (req, res, next) => {
  const { title, author, desc, cover } = req.body;
  const newBook = new Book({ id: generateUniqueId(), title, author, desc, cover });

  try {
    await newBook.save();
  } catch (err) {
    return res.status(500).json(err);
  }

  res.status(201).json({ newBook });
});

module.exports = router;
