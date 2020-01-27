import cookie from 'cookie'

export default async (req, res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('hello', 'bye', {
      path: '/',
      maxAge: 360000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
  )
}
