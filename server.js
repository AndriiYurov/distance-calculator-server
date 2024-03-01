const express = require("express");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error =>", err));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://18.117.128.5"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
