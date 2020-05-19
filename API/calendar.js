const db = require("../models");

module.exports = {
  update: function(event) {
    db.CalEvent.update({
      year: event.year,
      month: event.month,
      day: event.day,
      title: event.title
    }, event, {upsert: true})
    .then(dbModel => console.log("Updated " + dbModel.title))
    .catch(err => console.log(err));
  }
};
