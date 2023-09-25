const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  // url={vid2},
  tag: String,
  desc: String,
  song: String,
  like: Number,
  share: Number,
  comment: Number,
});

//collection inside database
const userModel = mongoose.model("tiktokVideos", tiktokSchema);

module.exports = userModel;
