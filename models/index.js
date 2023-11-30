const util = require("util");
const Sequelize = require("sequelize");
const config = require('../configs');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: false,
  freezeTableName: true,
  operatorsAliases: false,
  pool: {
    max: config.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.CustomerDB = require("./schema/customer")(sequelize, Sequelize);
module.exports = db;
