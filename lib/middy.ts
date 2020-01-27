import { NextApiResponse, NextApiRequest } from 'next'
import cors from 'micro-cors'

const defaultCorsConfig = req => ({
  origin: req.headers['origin'],
})

const preflight = (req, res: NextApiResponse) => {
  if (req.method === 'OPTIONS') {
    res.end()
  }
}

const middy = () => (...handlers) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const middlewares = [cors(defaultCorsConfig(req))(preflight), ...handlers]

  for (const middleware of middlewares) {
    if (res.headersSent || res.finished) {
      break
    }
    await middleware(req, res)
  }
}

export default middy
