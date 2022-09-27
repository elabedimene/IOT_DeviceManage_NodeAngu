const db = require("../models");
//const mysql = require('mysql');
const mqtt = require('mqtt');
// const dbConfig = require("./app/config/db.config");
const host = 'localhost'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`


const Asset = db.assets;
const Device = db.devices;
const Telem = db.telems;

async function mqttService() {


  const connectUrl = `mqtt://${host}:${port}`
  const client = mqtt.connect(connectUrl, {   //we call the built-in connect function of the MQTT module, and it will return a Client instance after the connection is successful.
    clientId,
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
  })

  const topic = 'topic'
  client.on('connect', () => {   // on : function of the returned Client instance to monitor(surveille) the connection status,
    console.log('Connected to mqtt broker ')
    client.subscribe(topic, () => {
      console.log(`Subscribe to topic '${topic}'`)
    })
  })



  client.on('message', async (topic, payload) => {
    p = payload.toString()

    data = JSON.parse(p)
    console.log('Received Message:', topic, p)

    console.log(data.asset);
    //await Asset.create(data.asset);
    await Asset.findOrCreate({
      where: {
        id: data.asset.id,
        token: data.asset.token,
      },
      defaults: {
        id: data.asset.id,
        token: data.asset.token,
        name: data.asset.name,
      }
    });

    const devices = data.asset.devices;
    devices.map(async (device) => {
      await Device.findOrCreate({
        where: {
          id: device.id,
          token: device.token, 
          name: device.name,
          assetId :  data.asset.id
        },
        default: {
          id: device.id,
          token: device.token,
          name: device.name,
          assetId :  data.asset.id
          
        }
          
         });console.log("dddddddddddddddddddddddddddd",device); 
      
      device.telems?.map((telem) => {
        Telem.findOrCreate({
          where: {
           
            token: telem.token,
            name: telem.name,
            value:telem.name,
            token: telem.token,
            timestamp: telem.timestamp,
            deviceId: device.id
            
          },
          default: {
            id: telem.id,
            name: telem.name,
            value:telem.name,
            token: telem.token,
            timestamp: telem.timestamp,
            deviceId: device.id

          }
        });
      })

    })




  });








}


module.exports = { mqttService };



