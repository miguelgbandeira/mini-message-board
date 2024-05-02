const express = require("express");
const { messages } = require("./index");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("form");
});

router.post("/", function (req, res) {
  messages.push({
    text: req.body.messageText,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
