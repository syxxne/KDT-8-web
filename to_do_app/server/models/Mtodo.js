const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const Model = (sequelize) => {
  return sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "todo",
      createdAt: false,
      updatedAt: false,
    }
  );
};

module.exports = Model;
