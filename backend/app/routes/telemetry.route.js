module.exports = app => {
    const telems = require("../controllers/telemetry.controller.js");
    var router = require("express").Router();
    
    
  router.get("/", telems.getAll);
  
  router.post("/add", telems.create);
  
  router.get("/:id", telems.findOne);
 
  
  //router.put("/:id", assets .update);
  //router.get("/devices/:id", assets.finddevicesforasset);
  
  router.delete("/delete/:id", telems.delete);
  
 router.delete("/", telems.deleteAll);
   
  
  app.use('/api/telems', router);
}