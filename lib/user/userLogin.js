module.exports = async (db, params) => {
  const where = {
    email: params.email,
  }
  const error = 'unable to login in, either email or password'
  const user = await db.user.findAll({ where, raw: true })
  if (user.length < 1) throw new Error(error)
  return user[0]
}
