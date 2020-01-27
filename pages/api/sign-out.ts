import { NextApiResponse } from 'next'
import { signOut } from 'lib/admin'

export default async (req, res: NextApiResponse) => {
  signOut(res)
  res.end()
}
