const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksRoute = require("./routes/booksRoute");
const addBookRoute = require("./routes/addBookRoute");
const editBookRoute = require("./routes/editBookRoute");

const app = express();
app.use(bodyParser.json({ limit: "5mb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/addBook", addBookRoute);
app.use("/books", booksRoute);
app.use("/editBook", editBookRoute);

mongoose
  .connect("mongodb+srv://naved:naved@reacteats.behsnvd.mongodb.net/ReactEats")
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
