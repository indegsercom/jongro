import { NextApiResponse, NextApiRequest } from 'next'
import cors from 'micro-cors'

const defaultCorsConfig = req => ({
  origin: req.headers['origin'],
})

const middy = () => (...handlers) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const middlewares = [...handlers, cors(defaultCorsConfig(req))]

  for (const middleware of middlewares) {
    if (res.headersSent) {
      break
    }
    await middleware(req, res)
  }
}

export default middy
