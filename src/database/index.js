import Sequelize from 'sequelize'

import FilmModel from '../models/films.js'
import UserModel from '../models/users.js'
import {config} from './config.js'

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
    })

export const Film = FilmModel(sequelize, Sequelize)
export const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('tablas sincronizadas')
    })

