const calendar = require("./calendar");
const news = require("./news");

const dbUpdate = function () {
  calendar.updateDB();
  news.updateDB();
};


module.exports = dbUpdate;
