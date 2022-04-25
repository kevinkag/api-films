import { validationResult } from "express-validator"
import { Film } from '../../database/index.js'

export const getAllFilms = async (req, res) => {
    const films = await Film.findAll()
    console.log({ message: films })
    res.status(200).json(films)
}

export const getFilmById = async (req, res) => {
    let filmId = req.params.filmId
    const film = await Film.findAll({
        where: { id: filmId }
    });
    res.status(200).json(film)
}

export const saveFilm = async (req, res) => {
    const film = await Film.create(req.body)
    res.json(film)
}

export const updateFilmById = async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId }
    })
    res.json({ success: `film updated ${req.params.filmId}` })
}

export const deleteFilmById = async (req, res) => {
    let id = req.params.filmId
    await Film.destroy({
        where: { id }
    })
    res.json({ success: `Film deleted ${req.params.filmId}` })
}


