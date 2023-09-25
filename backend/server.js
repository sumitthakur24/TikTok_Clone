const mongoose = require("mongoose");
const express = require("express");
const Data = require("./data.js");

//app configuration
const app = express();

//middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());
app.use("/api", require("./Routes/videoRoue"));
app.use("/api", require("./Routes/createUser"));

//DB config
const URL =
  "mongodb+srv://admin:admin@cluster0.3z24xzq.mongodb.net/tiktok-vid?retryWrites=true&w=majority";

mongoose.connect(URL);

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});

//listener
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server has started at PORT : ${PORT}`);
});
