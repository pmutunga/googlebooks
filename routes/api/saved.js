const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/saved"
router.route("/saved")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/saved/:id"
router
  .route("/saved/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
