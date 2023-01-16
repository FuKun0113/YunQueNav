const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");


class User extends Model {}

User.init(
  {
    user_name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["SuperAdmin", "Admin", "User"],
    },
  },
  {
    sequelize,
    modelName: "user",
  },
);

module.exports = User;
