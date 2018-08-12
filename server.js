const Koa = require('koa')
const logger = require('winston')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const db = require('./models')
const userController = require('./controllers/userController')

const app = new Koa()
const router = new Router()
app.use(
  bodyparser({
    enableTypes: ['json'],
  }),
)
// initialize db

const port = process.env.PORT
app.context.db = db
router.post('/', userController.createUser)
router.get('/', ctx => {
  ctx.body = 'hello'
})
app.use(router.routes())
app.listen(port, () => {
  logger.info(`listening to port ${port}`)
})
