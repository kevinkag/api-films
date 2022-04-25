import express from "express";
import bcrypt from 'bcryptjs'

import { validationResult } from "express-validator";

import { User } from '../../database/index.js'
import { checkFields } from "../../middlewares/check.js";
import { loginUser, registerUser } from "../../controllers/usersController/usersControllers.js";

const router = express.Router()

router.post('/register', checkFields, registerUser)

router.post('/login', loginUser)



export default router