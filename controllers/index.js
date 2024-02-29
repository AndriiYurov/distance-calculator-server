const axios = require("axios");
const {
  distanceCalculation,
  distanceCalculationGoogle,
} = require("../helpers/index");
const { HistoricalQueries } = require("../models/history");

module.exports.searchDistance = async (req, res) => {
  const { sourceAddress, destinationAddress } = req.body;

  const sourceParams = new URLSearchParams({
    q: sourceAddress,
    format: "json",
    addressdetails: 1,
    limit: 1,
  });

  const destinationParams = new URLSearchParams({
    q: destinationAddress,
    format: "json",
    addressdetails: 1,
    limit: 1,
  });

  try {
    const [sourceResponse, destinationResponse] = await Promise.all([
      axios.get(`https://nominatim.openstreetmap.org/search?${sourceParams}`),
      axios.get(
        `https://nominatim.openstreetmap.org/search?${destinationParams}`
      ),
    ]);

    if (!sourceResponse.data.length || !destinationResponse.data.length) {
      return res.status(400).send({ error: "No search results found" });
    }
    const sourceLat = sourceResponse.data[0].lat;
    const sourceLon = sourceResponse.data[0].lon;
    const destinationLat = destinationResponse.data[0].lat;
    const destinationLon = destinationResponse.data[0].lon;
    const distance = distanceCalculation(
      sourceLat,
      sourceLon,
      destinationLat,
      destinationLon
    );

    try {
      const saveQueries = new HistoricalQueries({
        origin: sourceAddress,
        destination: destinationAddress,
        distance: { distanceKm: distance },
      });
      await saveQueries.save();
    } catch (err) {
    //   console.log(err);
    }
    // const roadDistance = await distanceCalculationGoogle(
    //   sourceLat,
    //   sourceLon,
    //   destinationLat,
    //   destinationLon
    // ); // distance by road
    res.json({ distance });
  } catch (err) {
    // console.log(err);
  }
};

module.exports.getHistoricalQueries = async (req, res) => {
  const currentPage = 1;
  const perPage = 11;
  try {
    const allQueries = await HistoricalQueries.find()
      .skip((currentPage - 1) * perPage)
      .sort({ createdAt: -1 })
      .limit(perPage);
      res.json(allQueries)
  } catch (err) {
    // console.log(err)
  }
};
