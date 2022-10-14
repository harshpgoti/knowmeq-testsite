const { Sequelize, Model } = require('sequelize');
const db = require('../config/db')

const Tests = db.define('Tests',{
    TestId:{
        type:Sequelize.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    TestName:{
        type:Sequelize.STRING(50)
    }
})

module.exports = Tests;