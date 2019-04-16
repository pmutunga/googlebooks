const router = require("express").Router();
const savedRoutes = require("./saved");
const searchRoutes = require("./search");

// Book and saved routes
router.use("/saved", savedRoutes);
router.use("/books", searchRoutes);

module.exports = router;
