const db = require("../models");

module.exports = {
  view: function(req, res) {
    console.log(req);
    db.CalEvent.find({ year: req.body.year, month: req.body.month})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.CalEvent.update({title: req.body.title}, req.body, {upsert: false})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
};
