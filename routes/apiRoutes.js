const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.get("/", (req, res) => {
  console.log("apiRoutes is now fetching " + req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", {
      params: req.query
    })
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/saved"
router
  .route("/api/saved")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/saved/:id"
router
  .route("/api/saved/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
