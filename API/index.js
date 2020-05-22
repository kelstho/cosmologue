const calendar = require("./calendar");

const dbUpdate = function () {
  calendar.updateDB();
};


module.exports = dbUpdate;