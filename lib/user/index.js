const creatUser = require('./createUser')
const fetchUsers = require('./fetchUsers')
const userLogin = require('./userLogin')

class userRepository {
  static createUser(db, params) {
    return creatUser(db, params)
  }

  static fetchUsers(db, params) {
    return fetchUsers(db, params)
  }

  static userLogin(db, params) {
    return userLogin(db, params)
  }
}

module.exports = userRepository
