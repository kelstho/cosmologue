const db = require("../models");
// const passport = require("../config/passport");

// db.UserData.register({username:'paul', active: false}, 'paul');
// db.UserData.register({username:'jay', active: false}, 'jay');
// db.UserData.register({username:'roy', active: false, sign: 'libra'}, 'roy');

module.exports = {
  create: function(req, res) {
    // console.log(req);
    db.UserData.register({username: req.body.username, sign: req.body.sign}, req.body.password)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // login: function(req, res) {
    // console.log(req);
    // passport.authenticate('local', { failureRedirect: '/signup', failureFlash: true })
    //   .then(result => res.redirect("/"));
  //   res.json({redirectURI: "/"});
  // },
  data: function(req, res) {
    if (req.user) {
      db.UserData.findById(req.user._id)
      .then(dbModel => res.json({ 
        username: dbModel.username,
        sign: dbModel.sign,
        followed: dbModel.followed
      }))
      .catch(err => res.status(422).json(err));
    } else {
      let noUser = {
        message: "No user"
      };
      res.json(noUser);
    }

  },
  update: function(req, res) {
    db.UserData.findByIdAndUpdate(req.user._id, req.body, {new: true})
    .then(dbModel => res.json({ 
      username: dbModel.username,
      sign: dbModel.sign,
      followed: dbModel.followed
    }))
    .catch(err => res.status(422).json(err));
  },
};
