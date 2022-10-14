const { Sequelize, Model } = require('sequelize');
const db = require('../config/db')

const Questions = db.define('Questions',{
    QId:{
        type:Sequelize.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    TestId:{
        type:Sequelize.NUMBER
    },
    Question:{
        type:Sequelize.STRING(150)
    },
    Ans:{
        type:Sequelize.STRING(1)
    },
    a:{
        type:Sequelize.STRING(150)
    },
    b:{
        type:Sequelize.STRING(150)
    },
    c:{
        type:Sequelize.STRING(150)
    },
    d:{
        type:Sequelize.STRING(150)
    },
})

module.exports = Questions;