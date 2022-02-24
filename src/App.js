const Koa = require('koa');
const router = require('./route/Index')
const koaBody = require("koa-body");
//koa、router实例化 
const app = new Koa();
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
  console.log("服务已开启")
})