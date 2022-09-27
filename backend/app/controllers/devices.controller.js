const db = require("../models");
const Device = db.devices;
const Asset = db.assets;
const Telem = db.telems;
const Op = db.Sequelize.Op;


//works
exports.getAll = async (req, res) => {

  let devices = await Device.findAll({

    include: [
      {
        model: Asset,
        as: "asset"

      },
      {
        model: Telem,
        as: "telems"

      }
    ]

  })
  res.status(200).send(devices)

}




//works
exports.findOne = (req, res) => {
  const id = req.params.id;
  Device.findByPk(id, { include: ["asset", "telems"] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find device with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving device with id=" + id
      });
    });
};







//works
exports.delete = (req, res) => {
  const id = req.params.id;
  Device.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete device with id=${id}. Maybe it was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete device with id=" + id
      });
    });
};



//works
exports.createDevice = (req, res) => {
  d = req.body;
  Device.create(d)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating device."
      });
    });
}




exports.update = (req, res) => {
  const id = req.params.id;
  Device.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Device was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Device with id=${id}. Maybe asset was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Device with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  device.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums}  deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ."
      });
    });
};


exports.getAlldevicesForAsset = (req, res) => {
  const assetId = req.params.assetId;
  Device.find({ assetId: assetId }, function (err, course) {
    res.json(course);
  });

}
