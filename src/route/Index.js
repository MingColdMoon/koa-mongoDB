const Router = require('koa-router');
const router = new Router();
const { queryUsers, addUser } = require('../server/User/Index')
router.get('/',ctx =>{
  ctx.body = 'hello world'
})
router.get('/queryUser', async (ctx) =>{
  const res = await queryUsers()
  ctx.body = {
    code: 200,
    data: res,
    msg: '请求成功'
  }
})
router.post('/addUser', async (ctx) =>{
  const formData = ctx.request.body
  const res = await addUser({
    username: formData.username,
    password: formData.password
  })
  ctx.response.body = {
      code: 200,
      data: res,
      msg: '请求成功'
  }
})

module.exports = router