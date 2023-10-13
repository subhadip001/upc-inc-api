const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: String,
  url: String,
  type:String
  
});


module.exports = mongoose.model("Link", linkSchema);
