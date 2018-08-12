const creatUser = require('./createUser')

class userRepository {
  static createUser(db, params, transaction) {
    return creatUser(db, params, transaction)
  }
}

module.exports = userRepository
