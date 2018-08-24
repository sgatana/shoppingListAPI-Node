module.exports = async (db, params) => {
  const where = {
    email: params.email,
  }
  const error = 'unable to login in'
  const user = await db.user.findAll({ where, raw: true })
  if (user.length < 1) throw new Error(error)
  console.log(user)
  return user[0]
}
