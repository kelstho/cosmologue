// var cheerio = require("cheerio");
// var axios = require("axios");

const calendar = require("./calendar");

const dbUpdate = function () {
  calendar.updateDB();
};

module.exports = dbUpdate;