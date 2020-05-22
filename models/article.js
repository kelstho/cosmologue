const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: { type: String },
  description: { type: String },
  link: { type: String },
  publishDate: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model("Article", Article);
