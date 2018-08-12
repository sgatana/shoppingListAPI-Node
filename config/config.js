const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DEV_DB || 'shoppinglistDB',
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT || 'postgres',
}
const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.TEST_DB || 'shoppingList_test',
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT || 'postgres',
}

const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.PROD_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT || 'postgres',
}

module.exports = {
  production,
  development,
  test,
}
