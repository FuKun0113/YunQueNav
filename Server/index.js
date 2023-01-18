const express = require("express");
const {
  sequelize,
  User,
  Settings,
  Picture,
  Class,
  Icon,
} = require("./modules");
const authRouter = require("./routers").auth
const imageRouter = require("./routers").image

sequelize.sync().then(() => {
  console.log("数据库创建成功");
});

const app = express();

app.use(express.json());

app.use('/api/user',authRouter)

app.use('/api/image', imageRouter)

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
