const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));


app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cosmologue");

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
