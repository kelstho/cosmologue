const calendar = require("./calendar");

const dbUpdate = function () {
  calendar.update();
};

module.exports = dbUpdate;