const router = require("express").Router();
const calEventController = require("../../controllers/calEventController");

// Matches with "/api/event"
router
  .route("/:year/:month")
  .get(calEventController.view);

module.exports = router;
