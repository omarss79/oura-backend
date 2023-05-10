const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

const getMovies = asyncHandler( async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
})
const getMovie = asyncHandler( async (req, res) => {
    const movie = await Movie.find({id:req.params.id})
    if(movie.length == 0){
        res.status(400)
        throw new Error('Pelicula no encontrada')
    }
    const movieFound = await Movie.findById(movie[0]._id)
    if(!movieFound){
        res.status(400)
        throw new Error('Pelicula no encontrada')
    }
    res.status(200).json(movieFound)
})
const setMovies = asyncHandler( async (req, res) => {
    if(!req.user){
        // res.status(400).json({error: 'Favor de teclear una tarea'})
        res.status(400)
        throw new Error('Usuario no autorizado')
    }
    if(req.user.role === "admin"){
        if(!req.body.id){
            // res.status(400).json({error: 'Favor de teclear una tarea'})
            res.status(400)
            throw new Error('Favor de teclear el id de la pelicula')
        }
        const movie = await Movie.create(req.body)
        res.status(201).json(movie)
    }
    else{
        res.status(400)
        throw new Error('Usuario no autorizado')
    }
})
const updateLikesMovies = asyncHandler( async (req, res) => {
    const movie = await Movie.find({id:req.params.id})
    if(movie.length == 0){
        res.status(400)
        throw new Error('Pelicula no encontrada')
    }
    const movieUpdated = await Movie.findById(movie[0]._id)
    if(!movieUpdated){
        res.status(400)
        throw new Error('Pelicula no encontrada')
    }
    const vote_count = movieUpdated.vote_count + 1
    const movieModificada = await Movie.findByIdAndUpdate(movie[0]._id, {vote_count:vote_count}, {new: true})
    res.status(200).json(movieModificada)
})
const deleteMovies = asyncHandler( async (req, res) => {
    const movie = await Movie.find({id:req.params.id})
    if(movie.length == 0){
        res.status(400)
        throw new Error('Movie no encontrada')
    }
    const movieDelete = await Movie.findById(movie[0]._id)
    if(!movieDelete){
        res.status(400)
        throw new Error('Movie no encontrada')
    }
    await movieDelete.deleteOne()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getMovies,
    getMovie,
    setMovies,
    updateLikesMovies,
    deleteMovies
}