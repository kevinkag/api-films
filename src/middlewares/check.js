import { check } from "express-validator";

export const checkFields = [
    check('username', 'username is required').not().isEmpty(),
    check('email', 'email is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty()
]
