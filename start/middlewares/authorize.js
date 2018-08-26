const jwt = require('jsonwebtoken')

const skipPaths = ['/', '/api/login']

module.exports = async (ctx, next) => { // eslint-disable-line
  if (skipPaths.includes(ctx.path)) return next()
  try {
    const token = ctx.header.authorization.split(' ')[1] // eslint-disable-line
    jwt.verify(token, process.env.SECRET)
    return next()
  } catch (error) {
    ctx.status = 401
    ctx.body = {
      error: 'you are authorized, please log in',
    }
  }
}
