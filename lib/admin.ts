import admin from 'firebase-admin'
import cookie from 'cookie'
import config from './config'

const json = require('../secrets/firebase-admin-account.json')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(json),
    databaseURL: 'https://indegsercom.firebaseio.com',
  })
}

export const verifyIdToken = token => admin.auth().verifyIdToken(token)

export const signOut = res => {
  res.setHeader('Set-Cookie', cookie.serialize(config.TOKEN_COOKIE_NAME, ''))
}
