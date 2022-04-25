import express from "express";
import { checkToken } from "../../middlewares/auth.js";
import { deleteFilmById, getAllFilms, getFilmById, saveFilm, updateFilmById } from '../../controllers/filmsController/filmsControllers.js';

const routerFilms = express.Router()

routerFilms.get('/', getAllFilms)

routerFilms.get('/:filmId', getFilmById)

routerFilms.post('/', saveFilm)

routerFilms.put('/:filmId', updateFilmById)

routerFilms.delete('/:filmId', deleteFilmById)

export default routerFilms