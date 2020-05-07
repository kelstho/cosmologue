const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cosmologue");

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
