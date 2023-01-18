const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");
const bcrypt = require("bcrypt");

class User extends Model {
  static instanceLevelMethod() {
    return 'bar';
  }
}

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
