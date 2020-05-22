const router = require("express").Router();
const picController = require("../../controllers/picController");

// Matches with "/api/picOTD"
router
  .route("/")
  .get(picController.find);

module.exports = router;
