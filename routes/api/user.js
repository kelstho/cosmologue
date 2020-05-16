const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

// Matches with "/api/user"
router
  .route("/")
  .post(userController.create);

  // Matches with "/api/user/login"
router
  .post("/login", passport.authenticate('local'), function (req, res) {
  console.log(req);
  console.log(res);
  res.json({username: req.user.username,
    redirectURI: "/"});
});

  // Matches with "api/user/data"
router
  .route("/data")
  .get(userController.data)
  .post(userController.update);

module.exports = router;
