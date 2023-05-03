const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
    adult: {
        type: Boolean,
        required: [true, 'Por favor, seleccione si es pelicula de adultos']
    },
    backdrop_path:  {
        type: String,
        required: [true, 'Por favor, agregue una imagen']
    },
    genre_ids: {
        type: Array,
        required: [true, 'Por favor, agregue los generos']
    },
    id:  {
        type: Number,
        required: [true, 'Por favor, agregue el ID de la pelicula']
    },
    original_language: {
        type: String,
        required: [true, 'Por favor, agregue el idioma de la pelicula']
    },
    original_title: {
        type: String,
        required: [true, 'Por favor, agregue el título original de la pelicula']
    },
    overview: {
        type: String,
        required: [true, 'Por favor, agregue una reseña de la pelicula']
    },
    popularity: {
        type: Number,
        required: [true, 'Por favor, agregue la popularidad de la pelicula']
    },
    poster_path: {
        type: String,
        required: [true, 'Por favor, agregue el poster de la pelicula']
    },
    release_date: {
        type: Date,
        required: [true, 'Por favor, agregue la fecha de publicación de la pelicula']
    },
    title: {
        type: String,
        required: [true, 'Por favor, agregue el título de la pelicula']
    },
    video: {
        type: Boolean,
        required: [true, 'Por favor, seleccione si es video']
    },
    vote_average: {
        type: Number,
        required: [true, 'Por favor, seleccione el porcentaje de voto']
    },
    vote_count: {
        type: Number,
        required: [true, 'Por favor, seleccione la cantidad de votos']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Movie', moviesSchema)