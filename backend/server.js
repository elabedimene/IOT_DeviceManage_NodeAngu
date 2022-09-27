const m = require("./app/MQTT/mqttSub.js");
const dbConfig = require("./app/config/db.config");
const db = require("./app/models");

const express = require("express");
const cors = require("cors");
const app = express();

//const Device = require(" ./app/models/device.model") ; 

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/device.route")(app);
require("./app/routes/asset.route")(app);
require("./app/routes/telemetry.route")(app);

//connect to database 
db.sequelize.authenticate().then(() => {
  console.log('Connection to database  has been established successfully.' + dbConfig.DB);
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});



//add the  models to your database
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



//mqtt 


m.mqttService();












/* for (let d of data.asset.devices){
    const ddata ={
      id : d.id,
      name : d.name , 
      assetId : data.asset.id
    }
    console.log(d); */
//device.create(ddata) ;


/* res = Object.values(d).flatMap((item) => {
  const SS = item.telems
  console.log("device.telems " , SS);
  for (let t of SS){
      const tdata ={
      id : t.id,
      name : t.name , 
      deviceId : d.id
    }
    telem.create(tdata)

  }
  
}, []);  */














// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});