const {DataTypes} = require('sequelize');
const sequelize =   require('../uitls/db');

const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:'user',
        Emun:['admin','user']
    }
},{
    timestamps:false,
    tableName:'user'
});
module.exports = User