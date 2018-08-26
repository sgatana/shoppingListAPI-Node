module.exports = async db => {
  const users = await db.user.findAll({ raw: true })
  return users
}
