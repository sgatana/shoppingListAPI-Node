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
router.post('/api', userController.createUser)
router.get('/api', userController.fetchUsers)
router.post('/api/login', userController.userLogin)

router.get('/', ctx => {
  ctx.status = 200
  ctx.body = { message: 'welcome to shopping list API' }
})
app.use(router.routes())
app.listen(port, () => {
  logger.info(`listening to port ${port}`)
})
