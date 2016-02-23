var express = require("express");
var dataRouter = express.Router();

dataRouter.post("/td.crud01.select.prov.json", function(req, res, next) {
  var dat = require("../../../data/td.crud01.select.prov.json");
  res.send(dat);
});

dataRouter.post("/td.crud01.datagrid.json", function(req, res, next) {
  var dat = require("../../../data/td.crud01.datagrid.json");
  res.send(dat);
});

dataRouter.post("/td.crud01.select.city.json", function(req, res, next) {
  var dat = require("../../../data/td.crud01.select.city.json");
  res.send(dat);
});

dataRouter.post("/td.crud01.select.area.json", function(req, res, next) {
  var dat = require("../../../data/td.crud01.select.area.json");
  res.send(dat);
})

module.exports = dataRouter;
