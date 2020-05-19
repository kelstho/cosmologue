const router = require("express").Router();
const calEventController = require("../../controllers/calEventController");

// Matches with "/api/event"
router
  .route("/")
  .get(calEventController.view)
  .post(calEventController.update);

module.exports = router;
