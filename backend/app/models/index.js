const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port : dbConfig.PORT , 
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.devices = require("./device.model.js")(sequelize, Sequelize);
db.assets = require("./asset.model.js")(sequelize, Sequelize);
db.telems = require("./telemetry.model.js")(sequelize, Sequelize);

//relashion asset device 
db.assets.hasMany(db.devices, { 
  foreignKey: 'assetId',
  as: "devices" });

db.devices.belongsTo(db.assets, {
  foreignKey: "assetId",
  as: "asset",
});


//relashion device telem
db.devices.hasMany(db.telems, { 
  foreignKey: 'deviceId',
  as: "telems" });

db.telems.belongsTo(db.devices, {
  foreignKey: "deviceId",
  as: "device",
});


module.exports = db;