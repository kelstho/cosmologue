const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalEvent = new Schema({
  year: { type: String },
  month: { type: String },
  day: { type: String },
  title: { type: String },
  link: { type: String },
  summary: { type: String }
});

module.exports = mongoose.model("CalEvent", CalEvent);
