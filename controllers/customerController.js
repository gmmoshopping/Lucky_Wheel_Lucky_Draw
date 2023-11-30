const express = require("express");
const CustomerModel = require('../models/customer');

exports.getByID = (req, res, next) => {
  CustomerModel.getFindByCode(req.params.id)
    .then((result) => {
      router.post("/lucky", (req, res) => {
        res.render("customer", { data: { id: req.params.id } });
      });
    })
    .catch((error) => {
      router.post("/lucky", (req, res) => {
        res.render("customer", { data: { id: req.params.id } });
      });
    });
};

exports.customerController = (req, res, next) => {};