
const mysql = require('mysql')
// 生产环境域名
const host = "http://localhost"

// 生产环境端口
const port = 9000

// 创建连接池
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: "cms",
  user: "root",
  password: "123456"
})

// 对数据库进行增删查改操作的基础
const query = (sql, callback) => {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows)
      connection.release()
    })
  })
}

module.exports = {
  host,
  port,
  query
}