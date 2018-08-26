const bcrypt = require('bcryptjs')
const pushId = require('pushid')

module.exports = async (db, params) => {
  const userCount = await db.user.count({
    where: {
      email: params.email,
    },
  })
  if (userCount > 0) throw new Error('user already exists')
  params.id = pushId()
  params.password = await bcrypt.hash(params.password, 10)
  await db.user.create(params)
}
