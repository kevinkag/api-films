import moment from "moment";
import jwt from 'jwt-simple'
import { config } from '../database/config.js';

export const createToken = (user) => {
    const payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, config.SECRET_TOKEN)
}