const router = require("express").Router();

async function handleRequest(request) {
  let url = new URL(request.url);
  let param = url.param;
  let newUrl = new URL("telegra.ph/upload");
  newUrl.pathname=url.pathname;
  for (const [key, value] of url.searchParams) {
    newUrl.searchParams.set(key,value);
  }
  return fetch(newUrl,request);
}

router.use((req, res, next) => {
  console.log("正在接收一个跟图床有关的路由");
  next();
});

router.post("/upload", async (req, res)=>{
  handleRequest(req)

  // console.log(req.hostname)
  // res.send(req.url)
  
  // const url = new URL(req.url);
  // return (req)
  // console.log(url.pathname)

  // if (req.url == "/") {
  //   req.hostname="telegra.ph";
  //   let new_request=new Request("telegra.ph/upload",req);
  //   return fetch(new_request);
  // }
})

module.exports = router;