const express = require("express");
const router = express.Router();
const {
  searchDistance,
  getHistoricalQueries,
} = require("../controllers/index");
const { inputValidation } = require("../middleware/index");

router.post("/search", inputValidation, searchDistance);
router.get("/history", getHistoricalQueries);

module.exports = router;
