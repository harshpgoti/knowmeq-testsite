const { Sequelize, Model } = require('sequelize');
const db = require('../config/db')

const User = db.define('User',{
    UserId:{
        type:Sequelize.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    Email:{
        type:Sequelize.STRING(50)
    },
    UserName:{
        type:Sequelize.STRING(50)
    }
})

module.exports = User;