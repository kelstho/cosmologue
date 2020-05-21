const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/cosmologue",
{ useNewUrlParser: true, useUnifiedTopology: true });


const update = require("./API");

update();