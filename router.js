const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("home-guest");
});
router.get("/about", function (req, res) {
  res.send("heyits about page");
});

module.exports = router;
