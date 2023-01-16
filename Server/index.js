const express = require("express");
const {
  sequelize,
  User,
  Settings,
  Picture,
  Class,
  Icon,
} = require("./modules");
const bcrypt = require("bcrypt");
const { NUMBER } = require("sequelize");

sequelize.sync().then(() => {
  console.log("数据库创建成功");
});

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = req.body.user_name;
  const db_user = await User.findOne()
  if (db_user === null){
    try {
      User.create(req.body).then(() => {
        res.send("用户已保存");
      });
    } catch (e) {
      console.error(e);
  }}
  else{
    res.send('不允许注册')
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/users", async (req, res) => {
  try {
    await User.drop();
    res.send("用户已清空");
  } catch (e) {
    res.send(e);
  }
});

app.get("/user/:id", async (req, res) => {
  const find_id = req.params.id;
  const user_id = await User.findOne({ where: { id: find_id } });
  try {
    res.send(user_id);
  } catch (e) {
    res.send(e);
  }
});

app.post("/class",async(req,res)=>{
  const class_name = req.body.name
  const db_class = await Class.findOne({where:{name:class_name}})
  if (db_class !== null){
    res.send('分类已存在')
  }else{
    try {
      Class.create(req.body).then(()=>{
        res.send('分类已保存')
      })
    } catch (e) {
      res.send(e)
    }
  }

})

app.listen(8080, () => {
  console.log("后端服务器正在8080端口运行");
});
