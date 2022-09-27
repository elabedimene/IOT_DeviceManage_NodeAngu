const db = require("../models");
const Asset = db.assets;
const Device = db.devices;
const Telem = db.telems;
const Op = db.Sequelize.Op;



//works
exports.getAll = async (req, res) => {
  let asset = await Asset.findAll({
    include: [
      {
        model: Device,
        as: "devices"
      }
    ]
  })
  res.status(200).send(asset)
}




//works
exports.findOne = (req, res) => {
  const id = req.params.id;
  Asset.findByPk(id, { include: ["devices"] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find  asset with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving asset with id=" + id
      });
    });
};





// works
exports.createAsset = (req, res) => {
  const asset = req.body;
  console.log("asset", asset);
  Asset.create(asset)
    .then(data => {
      res.send(data);
    })
    .catch(err => {

      err.message || "Some error occurred while creating the asset."
    });
};


exports.update = (req, res) => {
  const id = req.params.id;
  Asset.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "asset was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update asset with id=${id}. Maybe asset was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating asset with id=" + id
      });
    });
};


//works
exports.delete = (req, res) => {
  const id = req.params.id;
  Asset.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete asset with id=${id}. Maybe it was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete asset with id=" + id
      });
    });
};








exports.deleteAll = (req, res) => {
  asset.destroy({
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





