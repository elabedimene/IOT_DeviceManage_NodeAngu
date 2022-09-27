module.exports = (sequelize, Sequelize) => {
    
    const Telemmetry = sequelize.define("telemmetry", {
        id:  {
            type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true
          } ,  
        name: {
            type: Sequelize.STRING
        } ,
        value: {
            type: Sequelize.FLOAT
        } ,
        token: {
            type: Sequelize.STRING,primaryKey: true
        },
        timestamp: {
            type: Sequelize.INTEGER
        } 
    });



    return Telemmetry;
};
