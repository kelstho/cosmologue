const db = require("../models");

module.exports = {
  view: function(req, res) {
    // console.log(req);
    db.CalEvent.find({ year: req.params.year, month: req.params.month})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
