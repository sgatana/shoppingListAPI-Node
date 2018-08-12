const userRepository = require('../lib/user')

class userController {
  static async createUser(ctx) {
    try {
      const params = ctx.request.body
      await userRepository.createUser(ctx.db, params)
      ctx.status = 200
      ctx.body = {}
    } catch (error) {
      ctx.body = {
        error: `error occurred ${error}`,
      }
    }
  }
}

module.exports = userController
