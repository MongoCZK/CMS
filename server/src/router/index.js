const Router = require('koa-router')
const router = new Router()
const manage = require('./manage')
const web = require('./web')
const home = require('./home')
const errorPage = require('./404')

router.get("/", async (ctx)=>{
  ctx.body = "根路径"
})

router.use("/manage", manage.routes(), manage.allowedMethods())
router.use("/web", web.routes(), web.allowedMethods())

// 404路由页面
router.use('/404', errorPage.routes(), errorPage.allowedMethods())

// 重定向
router.use('/home', home.routes(), home.allowedMethods())

router.redirect('/', '/home')

module.exports = router