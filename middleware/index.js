module.exports.inputValidation = async (req, res, next) => {
  const { sourceAddress, destinationAddress } = req.body;
  
  if (
    typeof sourceAddress !== "string" ||
    sourceAddress === undefined ||
    typeof destinationAddress !== "string" ||
    destinationAddress === undefined
  ) {
    return res
      .status(400)
      .send({ error: "Invalid input. Input should be a string." });
  }
  if (sourceAddress.trim() === "" || destinationAddress.trim() === "") {
    return res.status(400).send({
      error:
        "Address can not be empty.",
    });
  }
  else {
    next();
  }
};
