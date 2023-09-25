const express = require("express");
const router = express.Router();
const userModel = require("../dbVideos.js");

router.get("/v2/posts", (req, res) => {
  userModel
    .find()
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(500).send(err));
});

router.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  userModel
    .create(dbVideos)
    .then((result) => res.status(201).send(result))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
