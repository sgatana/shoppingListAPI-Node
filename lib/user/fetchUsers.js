module.exports = async db => {
  const users = await db.user.findAll()
  return users
}
