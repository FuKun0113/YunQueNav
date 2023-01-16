const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Class extends Model {}

Class.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    discription: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "class_t",
    timestamps: false,
  }
);

module.exports = Class;
