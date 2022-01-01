const Router = require('koa-router')
const router = new Router()
const utils = require('../../utils')

router.get("/", async (ctx) => {
  let data = await new Promise( (resolve, reject)=> {
    var sql = `SELECT * FROM user`;
    utils.query(sql, (err,data)=>{
      if(err) reject(err)
      resolve(data)
    })
  })
  ctx.body = data
})

module.exports = router
