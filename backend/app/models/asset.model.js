

module.exports = (sequelize, Sequelize) => {
    
    const Asset = sequelize.define("asset", {
      id:  {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      } , 
        name: {
          type: Sequelize.STRING
        },
         token :  {
          type: Sequelize.STRING,primaryKey: true
        } 
      });


    
      return Asset;



      
    };

   