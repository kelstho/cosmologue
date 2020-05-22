const express = require('express');
var session = require("express-session");
const mongoose = require("mongoose");
var schedule = require('node-schedule');
const routes = require("./routes");
// const path = require('path');
var passport = require("./config/passport");
const update = require("./API");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://user:cosmologue1@ds129469.mlab.com:29469/heroku_f4r7d3rj",
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/cosmologue",
{ useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
 
var rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
 
schedule.scheduleJob(rule, function(){
  update();
});

update();
