module.exports = (sequelize, Sequelize) => {
    
  const Device = sequelize.define("device", {
    id:  {
      type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true
    } , 
      name: {
        type: Sequelize.STRING
      } ,
       token :  {
        type: Sequelize.STRING,primaryKey: true
      } 
      



    });
    

    return Device;


    
  };
  

  