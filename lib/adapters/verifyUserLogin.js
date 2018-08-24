const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const verifyUserLogin = async (user, params) => {
  const verifyUser = await bcrypt.compare(params.password, user.password)
  if (!verifyUser) throw new Error('unable to verify user')
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET,
    {
      expiresIn: '1h',
    },
  )
  return token
}

module.exports = verifyUserLogin
