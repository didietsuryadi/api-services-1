var express = require('express');
var router = express.Router();

router.get('/api/movies')
router.get('/api/movies/:id')
router.post('/api/movies')
router.put('/api/movies/id')
router.delete('/api/movies/:id')

router.get('/api/tvs')
router.get('/api/tvs/:id')
router.post('/api/tvs')
router.put('/api/tvs/id')
router.delete('/api/tvs/:id')


module.exports = router;
