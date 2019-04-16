const axios = require("axios");
const router = require("express").Router();


router.get("/books", (req, res) => {
  console.log("apiRoutes is now fetching " + req.query);
  axios
   .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;