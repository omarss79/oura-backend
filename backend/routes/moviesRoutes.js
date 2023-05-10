const express = require('express')
const router = express.Router()
const {getMovies, getMovie, setMovies, updateLikesMovies, deleteMovies} = require('../controllers/movieController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', getMovies)
router.get('/:id', getMovie)
router.post('/', protect, setMovies)
router.put('/:id', updateLikesMovies)
router.delete('/:id', protect, deleteMovies)

module.exports = router