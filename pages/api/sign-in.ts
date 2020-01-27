import cookie from 'cookie'
import createHttpError from 'http-errors'
import { verifyIdToken } from 'lib/admin'

export default async (req, res) => {
  const { token } = req.body

  try {
    await verifyIdToken(token)
  } catch (err) {
    throw new createHttpError.NotAcceptable()
  }

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('IDG', token, {
      path: '/',
      maxAge: 360000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.end()
}
