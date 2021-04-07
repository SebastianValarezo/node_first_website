const express = require("express");
const router = express.Router();

// Routes

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/servicios", (req, res) => {
  res.render("servicios");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contactame", (req, res) => {
  res.render("contactame");
});

module.exports = router;
