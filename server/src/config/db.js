const { Sequelize } = require('sequelize');

module.exports = new Sequelize('TestSite', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});