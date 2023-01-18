const router = require("express").Router();
const { User } = require("../modules");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config({path: process.cwd() + '/.env'})

router.use((req, res, next) => {
  console.log("正在接收一个跟用户验证有关的路由");
  next();
});

router.post("/register", async (req, res) => {
  const db_user = await User.findOne();
  if (db_user === null) {
    try {
      req.body.role = "SuperAdmin";
      req.body.password = await bcrypt.hash(req.body.password, 10);
      User.create(req.body).then(() => {
        res.send("超级管理员账号已创建");
      });
    } catch (e) {
      console.error(e);
      res.status(400).send("创建用户出错");
    }
  } else {
    res.send("管理员未开启注册");
  }
});

router.post("/login", async (req, res) => {
  const { user_name, password } = req.body;
  const db = await User.findOne({ where: { user_name: user_name } });
  if (db) {
    const result = await bcrypt.compare(password, db.password);
    if (result){
      const tokenObject = {id:db.id,user_name:db.user_name}
      const token = jwt.sign(tokenObject,process.env.SECRETSALT)
      return res.send({
        message:"登录成功",
        token:"JWT " + token,
        user:db
      })
    }else{
      return res.send("密码错误")
    }
  } else {
    res.status(401).send("用户不存在");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/:id", async (req, res) => {
  const find_id = req.params.id;
  try {
    await User.destroy({ where: { id: find_id } });
    res.send("用户已删除");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  const find_id = req.params.id;
  const user_id = await User.findOne({ where: { id: find_id } });
  if (user_id) {
    try {
      res.send(user_id);
    } catch (e) {
      res.send(e);
    }
  } else {
    res.status(400).send("该用户不存在");
  }
});

module.exports = router;
