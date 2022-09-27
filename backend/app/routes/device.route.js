module.exports = app => {
  const devices = require("../controllers/devices.controller.js");
  var router = require("express").Router();

  router.get("/", devices.getAll);
  router.post("/add", devices.createDevice);
  router.get("/:id", devices.findOne);
  router.put("/:id", devices.update);
  router.delete("/delete/:id", devices.delete);
  router.delete("/", devices.deleteAll);

  app.use('/api/devices', router);
}