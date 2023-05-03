const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

const getMovies = asyncHandler( async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
})
const setMovies = asyncHandler( async (req, res) => {
    if(!req.body.id){
        // res.status(400).json({error: 'Favor de teclear una tarea'})
        res.status(400)
        throw new Error('Favor de teclear una tarea')
    }
    const movie = await Movie.create(req.body)
    res.status(201).json(movie)
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
    res.status(200).json({ id: movieModificada.id, vote_count: movieModificada.vote_count })
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
    setMovies,
    updateLikesMovies,
    deleteMovies
}