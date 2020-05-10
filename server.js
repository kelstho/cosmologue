const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
}

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds043190.mlab.com:43190/heroku_4l18zspb");

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
