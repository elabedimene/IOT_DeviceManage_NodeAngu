module.exports = app => {
    const assets = require("../controllers/assets.controller.js");
    var router = require("express").Router();
    
    
  router.get("/", assets.getAll);
  
  router.post("/add", assets.createAsset);
  
  router.get("/:id", assets.findOne);
 
  
  router.put("/:id", assets.update);
  //router.get("/devices/:id", assets.finddevicesforasset);
  
  router.delete("/delete/:id", assets.delete);
  
 router.delete("/", assets.deleteAll);
   
  
  app.use('/api/assets', router);
}