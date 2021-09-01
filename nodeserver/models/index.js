'use strict';
const Sequelize = require('Sequelize');
const sequelize = require('../sequelize').getInstance();
const db = {};

db.lists = require('./lists.js')(sequelize, Sequelize);


db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;
