var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/movie');
var tvsController = require('../controllers/tv');

router.get('/api/movies', moviesController.readMovies)
router.get('/api/movies/:id', moviesController.readMovie)
router.post('/api/movies', moviesController.createMovie)
router.put('/api/movies/id', moviesController.updateMovie)
router.delete('/api/movies/:id', moviesController.deleteMovie)

router.get('/api/tvs', tvsController.readTvs)
router.get('/api/tvs/:id', tvsController.readTv)
router.post('/api/tvs', tvsController.createTv)
router.put('/api/tvs/id', tvsController.updateTv)
router.delete('/api/tvs/:id', tvsController.deleteTv)


module.exports = router;
