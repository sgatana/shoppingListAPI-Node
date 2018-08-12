module.exports = async (db, params) => {
  const userCount = await db.user.count({
    where: {
      email: params.email,
    },
  })
  if (userCount > 0) throw new Error('user already exists')
  await db.user.create(params)
}
