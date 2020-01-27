import { NextApiRequest, NextApiResponse } from 'next'
import { verifyIdToken } from 'lib/admin'
import config from 'lib/config'
import middy from 'lib/middy'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies[config.TOKEN_COOKIE_NAME]

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

export default middy()(handler)
