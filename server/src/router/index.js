const Router = require('koa-router')
const router = new Router()
const manage = require('./manage')
const web = require('./web')

router.get("/", async (ctx)=>{
  ctx.body = "根路径"
})

router.use("/manage", manage.routes(), manage.allowedMethods())
router.use("/web", web.routes(), web.allowedMethods())

module.exports = router