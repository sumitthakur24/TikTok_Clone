const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../dbUser.js");

router.post(
  "/v2/signup",
  [
    body("email").isEmail(),
    body("password", "Password is not good!!").isLength(
      { min: 5 },
      body("name").isLength({ min: 3 })
    ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.status(201).send({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false });
    }
  }
);

router.post(
  "/v2/login",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    try {
      const email = req.body.email;
      const userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .send({ error: "User doesn't exist, Please Sign up!!" });
      }
      if (req.body.password !== userData.password) {
        return res.status(400).send({ error: "Incorrect Credentials" });
      }
      return res.send({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false });
    }
  }
);

module.exports = router;
