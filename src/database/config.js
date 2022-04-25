import dotenv from 'dotenv'
dotenv.config()

export const config = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    SECRET_TOKEN: process.env.SECRET_TOKEN
}