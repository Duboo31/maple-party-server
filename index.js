import express from "express";
const app = express();
const port = 5000;
import mongoose from "mongoose";

import config from "./config/mongo.js";

mongoose
  .connect(
    `mongodb+srv://duboo31:${config.MONGO_PASSWORD}@mapleparty.2ly3r.mongodb.net/`
  )
  .then(() => console.log("MongoDB 연결 성공..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
