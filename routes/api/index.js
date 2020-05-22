const router = require("express").Router();
const userRoutes = require("./user");
const eventRoutes = require("./event");
const articleRoutes = require("./article");

router.use("/user", userRoutes);
router.use("/event", eventRoutes);
router.use("/article", articleRoutes);

module.exports = router;
