import { db } from "../../lib/database"

export default async (req, res) => {
  const result = await db('account').select('*')
  res.json({ hello: result })
}