const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,

  // connections connections
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Create le tables
const url = sequelize.define('url', {
  name: {
    type: Sequelize.STRING,
  },
  longurl: {
    type: Sequelize.STRING,
  },
  shortenedUrl: {
    type: Sequelize.STRING,
  }
});

sequelize.sync();

// exporttttttta

exports.sequelize = sequelize;
exports.url = url;
