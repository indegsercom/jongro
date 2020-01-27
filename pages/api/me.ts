import { NextApiRequest, NextApiResponse } from 'next'
import { verifyIdToken } from 'lib/admin'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.cookies

  let currentUser = null
  if (token) {
    try {
      const decoded = await verifyIdToken(token)

      currentUser = {
        uid: decoded.uid,
        name: decoded.name,
        picture: decoded.picture,
        email: decoded.email,
      }
    } catch (err) {
      console.log(err)
    }
  }

  res.json({ currentUser })
}
