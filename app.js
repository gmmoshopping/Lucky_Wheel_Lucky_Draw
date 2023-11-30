const express = require("express");
const QRcode = require("qrcode");
const app = express();
const PORT = 3000;
const url = [];
const createfile = false;
const router = require('./router/index.js');

app.use(express.static("public"));
app.use("/images", express.static("images"));
app.set("view engine", "ejs");
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
