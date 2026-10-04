const { DataTypes } = require('sequelize');

const sequelize = require('../database');

module.exports = sequelize.define('Endereco', {
    rua: {
        type: DataTypes.STRING,
        allowNull: false
    },

    numero: {
        type: DataTypes.STRING
    },

    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    estado: {
        type: DataTypes.STRING
    }
})