const db = require("../models");
const Device = db.devices;
const Telem = db.telems;


//works
    exports.getAll= async (req, res) => {

      let telem = await Telem.findAll({
        
        include : [
          {
            model : Device , 
            as : "device"
            
          }
        ]

      })
      res.status(200).send(telem)

    }




//works
    exports.findOne = (req, res) => {
      const id = req.params.id;
      Telem.findByPk(id, { include: ["devices"] })
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find telem with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving telem with id=" + id
          });
        });
    };







//works
    exports.delete = (req, res) => {
      const id = req.params.id;
      Telem.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: " deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete telem with id=${id}. Maybe it was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete telem with id=" + id
          });
        });
    };



//works
    exports.create= (req, res) => {
      d = req.body ; 
      Telem.create(d)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating Telem."
          });
        });
      }



    

exports.deleteAll = (req, res) => {
  Telem.destroy({
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


