const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Picture extends Model {}

Picture.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    class: {
      type: DataTypes.STRING,
    },
    discription: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "picture_t",
    timestamps: false,
  }
);

module.exports = Picture;
