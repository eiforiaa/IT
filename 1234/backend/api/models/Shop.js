const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'shops';

const Shop = sequelize.define('Shop', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  objectName: {
    type: Sequelize.STRING,
  },

  address: {
    type: Sequelize.STRING,
  },

  legalAddress: {
    type: Sequelize.STRING,
  },

  admArea: {
    type: Sequelize.STRING,
  },

  jobType: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
  },
  nameOfLicensingAuthority: {
    type: Sequelize.STRING,
  },
  
  
}, { tableName });

module.exports = Shop;
