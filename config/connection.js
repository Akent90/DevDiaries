const Sequelize = require('sequelize');
require('dotenv').config();

// const env = process.env.NODE_ENV || 'development';
const config = require('./config.js');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});

module.exports = sequelize;