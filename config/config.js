const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
}
const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.TEST_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
}

const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
}

module.exports = {
  production,
  development,
  test,
}
