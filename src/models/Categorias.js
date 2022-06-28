const db = require("../database");
const { DataTypes } = require('sequelize');

const Categorias = db.define(
    "Categorias",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updateAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'categorias',
    }
);

module.exports = Categorias;