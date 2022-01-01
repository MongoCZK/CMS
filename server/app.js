const Koa = require('koa2')
const router = require('./src/router')
const app = new Koa()
const cors = require('koa2-cors')
const path = require('path')
const static = require('koa-static')
const { host, port } = require("./src/utils/index")

// 匹配不到页面的全部跳转到404
app.use(async (ctx, next) => {
  await next()
  if (parseInt(ctx.status) === 404) {
    ctx.response.redirect("/404")
  }
})

// 获取静态资源文件夹
app.use(static(path.join(__dirname, '/src/assets')))

// 跨域处理
app.use(cors())


// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回`405 Method Not Allowed`或'501 Not Implemented'
app.use(router.routes(), router.allowedMethods())

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`)
}) 