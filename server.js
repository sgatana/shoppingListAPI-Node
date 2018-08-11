const Koa = require('koa')
const logger = require('winston')
const db = require('./models')

const app = new Koa()

// initialize db

const port = process.env.PORT
app.context.db = db
app.use(async ctx => {
  ctx.body = await db.ShoppingList.findAll()
})

app.listen(port, () => {
  logger.info(`listening to port ${port}`)
})
