import cookie from 'cookie'
import createHttpError from 'http-errors'
import { verifyIdToken } from 'lib/admin'
import config from 'lib/config'
import middy from 'lib/middy'

const handler = async (req, res) => {
  const { token } = req.body

  try {
    await verifyIdToken(token)
  } catch (err) {
    throw new createHttpError.NotAcceptable()
  }

  res.setHeader(
    'Set-Cookie',
    cookie.serialize(config.TOKEN_COOKIE_NAME, token, {
      path: '/',
      maxAge: 360000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.end()
}

export default middy()(handler)
