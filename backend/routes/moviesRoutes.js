const express = require('express')
const router = express.Router()
const {getMovies, setMovies, updateLikesMovies, deleteMovies} = require('../controllers/movieController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', getMovies)
router.post('/', protect, setMovies)
router.put('/:id', protect, updateLikesMovies)
router.delete('/:id', protect, deleteMovies)

module.exports = router