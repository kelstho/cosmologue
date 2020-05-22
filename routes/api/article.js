const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/article"
router
  .route("/")
  .get(articleController.read);

module.exports = router;
