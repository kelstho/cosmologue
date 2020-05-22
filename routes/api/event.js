const router = require("express").Router();
const calEventController = require("../../controllers/calEventController");

// Matches with "/api/event"
router
  .route("/")
  .get(calEventController.view);

module.exports = router;
