import express from "express";
import apiFilmsRouter from './api/films.js'
import apiUsersRouter from './api/users.js'
import { checkToken } from "../middlewares/auth.js";

const router = express.Router()


router.use('/films', checkToken, apiFilmsRouter)
router.use('/users', apiUsersRouter)

export default router