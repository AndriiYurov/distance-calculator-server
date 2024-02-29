const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    distance: {
      distanceKm: {
        type: String,
        required: true,
      },
      distanceMi: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const HistoricalQueries = mongoose.model("HistoricalQueries", historySchema);
module.exports = { HistoricalQueries };
