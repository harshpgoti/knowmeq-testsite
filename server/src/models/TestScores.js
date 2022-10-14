const { Sequelize, Model } = require('sequelize');
const db = require('../config/db')

const TestScores = db.define('TestScores',{
    TSId:{
        type:Sequelize.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    UserId:{
        type:Sequelize.NUMBER
    },
    TestId:{
        type:Sequelize.NUMBER
    },
    TestScore:{
        type:Sequelize.NUMBER
    }
})

module.exports = TestScores;