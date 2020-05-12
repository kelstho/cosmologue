const express = require('express');
var session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
var passport = require("./config/passport");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cosmologue",
{ useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
