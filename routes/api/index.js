const router = require("express").Router();
const userRoutes = require("./user");
const eventRoutes = require("./event");
const articleRoutes = require("./article");
const picRoutes = require("./picOTD");

router.use("/user", userRoutes);
router.use("/event", eventRoutes);
router.use("/article", articleRoutes);
router.use("/picOTD", picRoutes);

module.exports = router;
