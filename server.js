const Koa = require('koa')

const app = new Koa()

const port = 3000

app.use(async ctx => {
  ctx.body = { message: 'hello there' }
})

app.listen(port)
