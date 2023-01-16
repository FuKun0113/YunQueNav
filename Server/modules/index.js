// 定义各表之间的关系

const sequelize = require('./database')
const User = require('./user')
const Picture = require('./picture')
const Settings = require('./settings')
const Class = require('./class')
const Icon = require('./icon')


Class.hasMany(Icon)
Icon.belongsTo(Class)

User.hasMany(Class);
User.hasMany(Picture);
User.hasMany(Settings);
Class.belongsTo(User);
Settings.belongsTo(User);
Picture.belongsTo(User);

module.exports = {sequelize,User,Picture,Settings,Class,Icon}