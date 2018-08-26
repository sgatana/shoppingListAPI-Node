const userRepository = require('../lib/user')
const verifyUserLogin = require('../lib/adapters/verifyUserLogin')

class userController {
  static async createUser(ctx) {
    try {
      const params = ctx.request.body
      await userRepository.createUser(ctx.db, params)
      ctx.status = 201
      ctx.body = {}
    } catch (error) {
      ctx.status = 409
      ctx.body = {
        error: error.message,
      }
    }
  }

  static async fetchUsers(ctx) {
    try {
      const users = await userRepository.fetchUsers(ctx.db)
      ctx.status = 200
      ctx.body = { count: users.length, users }
    } catch (error) {
      ctx.body = {
        error: error.message,
      }
    }
  }

  static async userLogin(ctx) {
    try {
      const params = ctx.request.body
      const user = await userRepository.userLogin(ctx.db, params)
      const token = await verifyUserLogin(user, params)
      ctx.status = 200
      ctx.body = {
        message: 'login successful',
        token,
      }
    } catch (error) {
      ctx.status = 401
      ctx.body = {
        error: error.message,
      }
    }
  }
}

module.exports = userController
