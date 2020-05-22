const db = require("../models");

module.exports = {
  read: function(req, res) {
    db.Article.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
