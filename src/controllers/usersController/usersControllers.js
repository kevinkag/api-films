import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
import { User } from '../../database/index.js'
import { createToken } from "../../services/index.js";

export const registerUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json({ errores: errors.array() })

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body)
    res.json(user)
}

export const loginUser = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (user) {
        const equals = bcrypt.compareSync(req.body.password, user.password)
        if (equals) {
            res.json({ success: createToken(user) })
        } else {
            res.json({ error: 'Email or password was not correct' })
        }
    } else {
        res.json({ error: 'Email or password was not correct' })
    }
}