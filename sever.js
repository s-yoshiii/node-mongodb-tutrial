const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
// データベース接続
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("データベース接続に接続しました。"))
  .catch((err) => console.log(err));
app.listen(3000, () => {
  console.log("サーバーが起動しました。");
});
