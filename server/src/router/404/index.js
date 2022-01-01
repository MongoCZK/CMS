const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')
const mime = require('mime-types')

router.get('/', async (ctx)=>{
  const filePath = path.join(__dirname,"../../assets/images/404.gif")
  const file = fs.readFileSync(filePath)
  const mimeType = mime.lookup(filePath)
  // 设置返回类型
  ctx.set('content-type',mimeType)
  // 返回图片内容
  ctx.body = file 
})

module.exports = router