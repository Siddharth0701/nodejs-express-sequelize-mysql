const dbConfig = require("../config/db.config.js");
const Sequelize=require("sequelize");
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
host:dbConfig.dialect,
dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db={};
db.Sequelize=Sequelize;
db.Sequelize=sequelize;
db.tutorials=require("./tutorials.model.js")(sequelize,Sequelize);
module.exports=db;