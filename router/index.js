const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const QRcode = require("qrcode");
const url = [];
const createfile = false;
const config = require('../configs')
const customerController = require('../controllers/customerController');

for (let i = 1; i <= 400; i++) {
    QRcode.toDataURL(i.toString(), (err, qrCodeUrl) => {
      url.push(qrCodeUrl);
      if (createfile === true) {
        QRcode.toFile(`public/img/${i}.png`, i.toString());
      }
  
      router.get("/generator", (req, res) => {
        res.render("qrcode", { data: { qr: url } });
      });
    });
  }

  router.get("/", (req, res) => {
    res.render("index",{
      dataWheel: config.luckyWheelLabel,
      countLucky: config.countLucky,
    }); 
  });

  router.get("/scanner", (req, res) => {
    res.render("scanner");
  });

  router.post("/lucky", (req, res) => {
    res.render("customer", { data: { qr: url } });
  });

  router.get("/:id", customerController.getByID , function (req, res, next) {});
module.exports = router;