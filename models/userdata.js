const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserData = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  sign: { type: String },
  followed: { type: Object }
});

UserData.plugin(passportLocalMongoose);

module.exports = mongoose.model("UserData", UserData);
