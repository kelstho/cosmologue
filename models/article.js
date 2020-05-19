const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  apiRef: { type: String },
  apiID: { type: String },
  title: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model("Article", Article);
