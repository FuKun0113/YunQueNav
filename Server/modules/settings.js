const { Model, DataTypes } = require('sequelize')
const sequelize = require("./database")


class Settings extends Model {}

Settings.init({
  bg_pic:{
    type: DataTypes.STRING
  },
  address:{
    type: DataTypes.STRING
  },
  theme:{
    type: DataTypes.STRING
  },
  language:{
    type: DataTypes.STRING,
  },
},{
  sequelize,
  modelName:"settings_t",
  timestamps: false
})


module.exports = Settings