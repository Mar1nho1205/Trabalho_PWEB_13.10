const { DataTypes } = require('sequelize');

const sequelize = require('../database');

module.exports = sequelize.define('Ordem', {
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})