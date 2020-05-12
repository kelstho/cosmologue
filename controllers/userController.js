const db = require("../models");

// db.UserData.register({username:'paul', active: false}, 'paul');
// db.UserData.register({username:'jay', active: false}, 'jay');
// db.UserData.register({username:'roy', active: false, sign: 'libra'}, 'roy');

module.exports = {
  create: function(req, res) {
    db.UserData.register({username: req.body.username, sign: req.body.username}, req.body.password)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
