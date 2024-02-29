const axios = require("axios");
require("dotenv").config();

module.exports.distanceCalculation = (
  sourceLat,
  sourceLon,
  destinationLat,
  destinationLon
) => {
    // Haversine formula
  const R = 6371;

  let dLat = ((destinationLat - sourceLat) * Math.PI) / 180;
  let dLon = ((destinationLon - sourceLon) * Math.PI) / 180;
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((sourceLat * Math.PI) / 180) *
      Math.cos((destinationLat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distance = R * c;
  return distance.toFixed(2);
};

module.exports.distanceCalculationGoogle = async (
  sourceLat,
  sourceLon,
  destinationLat,
  destinationLon
) => {
  const key = process.env.GOOGLE_API_KEY;
  const params = new URLSearchParams({
    destinations: `${destinationLat},${destinationLon}`,
    origins: `${sourceLat},${sourceLon}`,
    units: "imperial",
    key: key,
  });
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?${params}`
    );
    const roadDistance = data.rows[0].elements[0].distance.text;
    return roadDistance;
  } catch (err) {
    // console.log(err);
  }
};
