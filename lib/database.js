require('dotenv').config()
import knex from 'knex'

console.log(process.env.DATABASE_URL)
export const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
})

