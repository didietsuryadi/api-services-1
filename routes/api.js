var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/movie');
var tvsController = require('../controllers/tv');
var apiController = require('../controllers/api');

//routing api
router.get('/', apiController)


//routing movie
router.get('/movies', moviesController.readMovies)
router.get('/movie/:id', moviesController.readMovie)
router.post('/movie', moviesController.createMovie)
router.put('/movie/:id', moviesController.updateMovie)
router.delete('/movie/:id', moviesController.deleteMovie)

//routing tv
router.get('/tvs', tvsController.readTvs)
router.get('/tv/:id', tvsController.readTv)
router.post('/tv', tvsController.createTv)
router.put('/tv/:id', tvsController.updateTv)
router.delete('/tv/:id', tvsController.deleteTv)


module.exports = router;
