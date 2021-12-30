const Koa = require('koa2')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const { host, port } = require("./src/utils/index")


router.get('/',async(ctx)=>{
  ctx.body = "根路径"
})

router.get("/manage", async (ctx)=>{
  ctx.body = "管理系统"
})

// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回`405 Method Not Allowed`或'501 Not Implemented'
app.use(router.routes(), router.allowedMethods())

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`)
})