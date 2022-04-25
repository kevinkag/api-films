import jwt from 'jwt-simple'
import moment from 'moment'
import { config } from '../database/config.js'


export const checkToken = (req, res, next) => {
    if (!req.headers['user-token']) {
        return res.json({ error: 'you need include user-token in the header' })
    }
    const userToken = req.headers['user-token']
    let payload = {}

    try {
        payload = jwt.decode(userToken, config.SECRET_TOKEN)
    } catch (error) {
        res.json({ error: 'token is incorrect' })
    }

    if (payload.expiredAd < moment().unix()) {
        return res.json({ error: 'token is expired' })
    }

    req.userId = payload.userId

    next()
}