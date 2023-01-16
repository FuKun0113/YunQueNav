const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Icon extends Model {}

Icon.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    website: {
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
    modelName: "icon_t",
    timestamps: false,
  }
);

module.exports = Icon;
